package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello")
	})

	app.Get("/:value", func(c *fiber.Ctx) error {
		return c.SendString("value : " + c.Params("value"))
	})

	app.Listen(":8080")
}
