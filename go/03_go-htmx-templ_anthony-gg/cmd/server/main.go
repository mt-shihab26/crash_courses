package main

import (
	"fmt"
	"log"
	"log/slog"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/joho/godotenv"

	"goth/handler"
)

type HTTPHandler = func(http.ResponseWriter, *http.Request) error

func wrap(h HTTPHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := h(w, r); err != nil {
			slog.Error("HTTP handler error", "err", err, "path", r.URL.Path)
		}
	}
}

func main() {
	if err := godotenv.Load(); err != nil {
		log.Fatal("Error loading .env file")
	}

	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", wrap(handler.HandleFoo))

	listenAddr := os.Getenv("LISTEN_ADDR")
	slog.Info(fmt.Sprintf("Server is listening at http://127.0.0.1%v", listenAddr))
	http.ListenAndServe(listenAddr, r)
}
