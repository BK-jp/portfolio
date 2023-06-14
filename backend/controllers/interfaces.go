package controllers

type Controller interface {
	SetRouter()
	GetRouterMap() map[string]bool
}
