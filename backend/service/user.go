package service

import (
	"errors"
	"fmt"
	"os"
	"strings"
	"time"

	"backend/config"
	"backend/dto"
	"backend/repository"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"github.com/joho/godotenv"
	"github.com/twinj/uuid"
)

type UserService struct {
	UserRepository *repository.UserRepository
}

var UserServiceImpl UserService

func (s *UserService) InitService() error {
	config.Connect()
	s.UserRepository = &repository.UserRepositoryImpl

	db, err := config.Connect()

	if err != nil {
		panic(err)
	}

	s.UserRepository.DB = db

	return nil
}

func (s *UserService) Login(c *fiber.Ctx) error {
	user := new(dto.User)
	data := fiber.Map{}
	if err := c.BodyParser(user); err != nil {
		return errors.New("情報を読み取れません。")
	}

	u, err := s.UserRepository.SelectOneUserByEmailAndPassword(user)

	if err != nil {
		return errors.New("メールやパスワードが一致しません。")
	}

	token, err2 := createToken(u.Email)

	if err2 != nil {
		return errors.New("ログイン情報作成に失敗しました。")
	}

	err3 := s.UserRepository.InsertOneUserToken(token)

	if err3 != nil {
		return errors.New("ログイン情報記録に失敗しました。")
	}

	data["access_token"] = token.AccessToken
	data["targetUrl"] = "/portfolio"

	c.Status(fiber.StatusOK).JSON(data)

	return nil
}

func (s *UserService) GetNewAccessToken(c *fiber.Ctx) error {
	data := fiber.Map{}
	Authorization := c.Get("Authorization", "")

	if Authorization == "" {
		return errors.New("無効な要求です。")
	}

	accessToken := strings.Replace(Authorization, "Bearer ", "", 1)

	token, err := s.UserRepository.SelectTokenByAccessToken(accessToken)

	if err != nil {
		return errors.New("ログイン情報が存在しません。")
	}

	claims := jwt.MapClaims{}

	jwt.ParseWithClaims(token.RefreshToken, &claims, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("ACCESS_SECRET")), nil
	})

	email := claims["user_id"].(string)

	newToken, err := createToken(email)

	if err != nil {
		return errors.New("ログイン情報作成に失敗しました。")
	}

	err2 := s.UserRepository.UpdateToken(newToken, token)

	if err2 != nil {
		return errors.New("ログイン情報修正に失敗しました。")
	}

	data["access_token"] = newToken.AccessToken

	c.Status(fiber.StatusOK).JSON(data)
	return nil
}

func (s *UserService) GetLoginUser(c *fiber.Ctx) error {
	data := fiber.Map{}
	Authorization := c.Get("Authorization", "")

	if Authorization == "" {
		return errors.New("無効な要求です。")
	}

	accessToken := strings.Replace(Authorization, "Bearer ", "", 1)

	claims := jwt.MapClaims{}

	jwt.ParseWithClaims(accessToken, &claims, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("ACCESS_SECRET")), nil
	})

	email := claims["user_id"].(string)
	user := new(dto.User)

	user, err := s.UserRepository.SelectOneUserByEmail(email)

	if err != nil {
		return errors.New("ログイン情報を読み取れません。")
	}

	user.Password = ""
	data["user"] = user

	c.Status(fiber.StatusOK).JSON(data)

	return nil
}

func createToken(email string) (*dto.Token, error) {
	token := new(dto.Token)
	err := godotenv.Load(".env")

	if err != nil {
		return nil, fmt.Errorf("godotenv.Load: %v", err)
	}

	token.AtExpires = time.Now().Add(time.Minute * 15).Unix()
	token.AccessUuid = uuid.NewV4().String()

	atClaims := jwt.MapClaims{}
	atClaims["authorized"] = true
	atClaims["access_uuid"] = token.AccessUuid
	atClaims["user_id"] = email
	atClaims["exp"] = token.AtExpires
	at := jwt.NewWithClaims(jwt.SigningMethodHS256, atClaims)
	accessToken, err := at.SignedString([]byte(os.Getenv("ACCESS_SECRET")))
	if err != nil {
		return nil, err
	}
	token.AccessToken = accessToken

	token.RtExpires = time.Now().Add(time.Hour * 24 * 7).Unix()
	token.RefreshUuid = uuid.NewV4().String()

	rtClaims := jwt.MapClaims{}
	rtClaims["refrash_uuid"] = token.RefreshUuid
	rtClaims["user_id"] = email
	rtClaims["exp"] = token.RtExpires
	rt := jwt.NewWithClaims(jwt.SigningMethodHS256, rtClaims)
	refrashToken, err := rt.SignedString([]byte(os.Getenv("REFRASH_SECRET")))
	if err != nil {
		return nil, err
	}
	token.RefreshToken = refrashToken

	return token, nil
}
