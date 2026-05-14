package main

import "net/http"

func home(w http.ResponseWriter, r *http.Request) {
	response(w, 200, struct{}{})
}
