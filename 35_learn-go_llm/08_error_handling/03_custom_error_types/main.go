package main

import "fmt"

type myError struct {
	code    int
	message string
}

func (e myError) Error() string {
	return fmt.Sprintf("Error %d: %s", e.code, e.message)
}

func riskyAction(flag bool) error {
	if flag {
		return myError{code: 404, message: "Resource not found"}
	}
	return nil
}

func main() {
	err := riskyAction(true)
	if err != nil {
		fmt.Println("Custom error:", err)
	}
}
