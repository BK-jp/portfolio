package main

import (
	"backend/controllers"
	"errors"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	jwtware "github.com/gofiber/jwt/v3"
	"github.com/golang-jwt/jwt/v4"
)

func main() {
	app := fiber.New(fiber.Config{
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			data := fiber.Map{}
			code := fiber.StatusInternalServerError

			var e *fiber.Error

			if errors.As(err, &e) {
				code = e.Code
			}

			data["status"] = code
			data["message"] = err.Error()

			c.Status(code).JSON(data)
			return nil
		},
	})
	api := app.Group("/api")
	auth := api.Group("/auth")

	authController, err := controllers.NewAuthController(auth)
	accessMap := make(map[string]bool)

	controllers := []controllers.Controller{
		authController,
	}

	for _, c := range controllers {
		c.SetRouter()
		for k, v := range c.GetRouterMap() {
			accessMap[k] = v
		}
	}

	if err != nil {
		panic("controller error")
	}

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost",
		AllowHeaders: "Authorization",
	}))

	app.Use(jwtware.New(jwtware.Config{
		SigningMethod: "HS256",
		SigningKey:    []byte(os.Getenv("ACCESS_SECRET")),
		SuccessHandler: func(c *fiber.Ctx) error {
			email := c.Locals("user_id").(*jwt.Token)
			log.Println(email)
			claims := email.Claims.(jwt.MapClaims)
			log.Println(claims)

			return c.Next()
		},
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			log.Println(err)
			if err.Error() == "key is of invalid type" {
				return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
					"message":   err.Error(),
					"targetUrl": "/",
				})
			} else {
				return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
					"message":   err.Error(),
					"targetUrl": "/",
				})
			}
		},
		Filter: func(c *fiber.Ctx) bool {
			return accessMap[string(c.Request().RequestURI())]
		},
		ContextKey: "user_id",
	}))

	app.Listen(":9000")
}
