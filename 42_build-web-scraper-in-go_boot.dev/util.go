package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func response(w http.ResponseWriter, statusCode int, payload any) {
	data, err := json.Marshal(payload)
	if err != nil {
		log.Printf("Failed to marshal json response: %v", payload)
		w.WriteHeader(500)
		return
	}
	w.Header().Add("Content-Type", "application/json")
	w.WriteHeader(statusCode)
	w.Write(data)
}

func abort(w http.ResponseWriter, statusCode int, message string) {
	if statusCode >= 500 {
		log.Println("Responding with 5xx error:", message)
	}
	payload := struct {
		Error string `json:"error"`
	}{
		Error: message,
	}

	response(w, statusCode, payload)
}
