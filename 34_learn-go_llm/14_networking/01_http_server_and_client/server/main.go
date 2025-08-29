package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello From Go Server\n"))
}

func main() {
	http.HandleFunc("/", helloHandler)
	fmt.Println("Server running on http://127.0.0.1:8080")
	http.ListenAndServe(":8080", nil)
}
