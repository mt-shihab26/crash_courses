package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {
	res, err := http.Get("http://127.0.0.1:8080")
	if err != nil {
		panic(err)
	}
	defer res.Body.Close()

	body, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(body))
}
