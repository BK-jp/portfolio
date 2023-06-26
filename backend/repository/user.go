package repository

import (
	"database/sql"

	"backend/dto"
)

type UserRepository struct {
	DB *sql.DB
}

var UserRepositoryImpl UserRepository

func (r *UserRepository) SelectOneUserByEmail(email string) (*dto.User, error) {
	user := new(dto.User)
	query := `
		SELECT	email
				,password
				,name
		FROM	active_user
		WHERE	email = ?
	`

	err := r.DB.QueryRow(query, email).Scan(&user.Email, &user.Password, &user.Name)

	if err != nil {
		return user, err
	}

	return user, nil
}

func (r *UserRepository) SelectOneUserByEmailAndPassword(user *dto.User) (*dto.User, error) {
	query := `
		SELECT	email
				,password
				,name
		FROM	active_user
		WHERE	email = ?
				AND password = SHA2(?, 256)
	`

	err := r.DB.QueryRow(query, user.Email, user.Password).Scan(&user.Email, &user.Password, &user.Name)

	if err != nil {
		return user, err
	}

	return user, nil
}

func (r *UserRepository) InsertOneUserToken(token *dto.Token) error {
	query := `
		INSERT INTO	active_user_token(
			access_token
			,refrash_token
			,access_uuid
			,refrash_uuid
			,access_token_expired
			,refrash_token_expired
		)
		VALUES(
			?
			,?
			,?
			,?
			,?
			,?
		)
	`

	result, err := r.DB.Exec(query, token.AccessToken, token.RefreshToken, token.AccessUuid, token.RefreshUuid, token.AtExpires, token.RtExpires)
	if err != nil {
		return err
	}

	count, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if count <= 0 {
		panic("Fail to Insert")
	}

	return nil
}

func (r *UserRepository) SelectTokenByAccessToken(access_token string) (*dto.Token, error) {
	token := new(dto.Token)

	query := `
		SELECT	access_token
				,refrash_token
				,access_uuid
				,refrash_uuid
				,access_token_expired
				,refrash_token_expired
		FROM	active_user_token
		WHERE	access_token = ?
	`

	err := r.DB.QueryRow(query, access_token).Scan(
		&token.AccessToken,
		&token.RefreshToken,
		&token.AccessUuid,
		&token.RefreshUuid,
		&token.AtExpires,
		&token.RtExpires,
	)

	if err != nil {
		return token, err
	}

	return token, nil
}

func (r *UserRepository) UpdateToken(newToken *dto.Token, oldToken *dto.Token) error {
	query := `
		UPDATE	active_user_token
		SET		access_token = ?
				,refrash_token = ?
		WHERE	access_token = ?
	`

	result, err := r.DB.Exec(query, newToken.AccessToken, newToken.RefreshToken, oldToken.AccessToken)

	if err != nil {
		return err
	}

	count, err := result.RowsAffected()
	if err != nil {
		return err
	}
	if count <= 0 {
		panic("Fail to Insert")
	}

	return nil
}
