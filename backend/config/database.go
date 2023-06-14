package config

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

func Connect() (*sql.DB, error) {
	err := godotenv.Load(".env")

	if err != nil {
		return nil, fmt.Errorf("godotenv.Load: %v", err)
	}

	var (
		dbUser = os.Getenv("DB_USER")
		dbPwd  = os.Getenv("DB_PASSWORD")
		dbName = os.Getenv("DB_NAME")
	)

	dbURI := fmt.Sprintf("%s:%s@tcp(34.64.89.31:3306)/%s?parseTime=true", dbUser, dbPwd, dbName)

	db, err := sql.Open("mysql", dbURI)
	if err != nil {
		return nil, fmt.Errorf("sql.Open: %v", err)
	}

	return db, nil
}
