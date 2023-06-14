package controllers

import (
	"backend/service"

	"github.com/gofiber/fiber/v2"
)

type AuthController struct {
	router      fiber.Router
	userService *service.UserService
}

func NewAuthController(router fiber.Router) (*AuthController, error) {
	err := service.UserServiceImpl.InitService()

	if err != nil {
		return nil, err
	}

	return &AuthController{
		router:      router,
		userService: &service.UserServiceImpl,
	}, nil
}

func (c *AuthController) SetRouter() {
	c.router.Post("/login", c.userService.Login)
	c.router.Post("/refreshToken", c.userService.GetNewAccessToken)
	c.router.Get("/test", c.userService.Test)
}

func (c *AuthController) GetRouterMap() map[string]bool {
	accessible := make(map[string]bool)
	accessible["/api/auth/login"] = true
	accessible["/api/auth/test"] = false
	accessible["/api/auth/refreshToken"] = true

	return accessible
}
