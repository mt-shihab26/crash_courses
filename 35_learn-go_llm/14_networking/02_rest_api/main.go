package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"
)

// ---- Data Model ----
type Pet struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Type string `json:"type"`
}

// ---- In-memory storage ----
var pets = []Pet{
	{ID: 1, Name: "Max", Type: "Dog"},
	{ID: 2, Name: "Whiskers", Type: "Cat"},
}

// ---- Middleware: Logging ----
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		log.Printf("Started %s %s", r.Method, r.URL.Path)
		next.ServeHTTP(w, r)
		log.Printf("Completed in %v", time.Since(start))
	})
}

// ---- Handlers ----
func getPetsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(pets)
}

func createPetHandler(w http.ResponseWriter, r *http.Request) {
	var newPet Pet
	err := json.NewDecoder(r.Body).Decode(&newPet)
	if err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	newPet.ID = len(pets) + 1
	pets = append(pets, newPet)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newPet)
}

// ---- Router Setup ----
func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/pets", func(w http.ResponseWriter, r *http.Request) {
		switch r.Method {
		case http.MethodGet:
			getPetsHandler(w, r)
		case http.MethodPost:
			createPetHandler(w, r)
		default:
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	})

	// Wrap router with logging middleware
	wrapped := loggingMiddleware(mux)

	fmt.Println("Server running at http://localhost:8080")
	http.ListenAndServe(":8080", wrapped)
}
