package handler

import (
	"fmt"
	"net/http"
)

func HandleFoo(w http.ResponseWriter, r *http.Request) error {
	return fmt.Errorf("fuck you")
}
