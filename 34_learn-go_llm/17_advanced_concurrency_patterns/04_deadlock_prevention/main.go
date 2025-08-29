package main

import (
	"fmt"
	"time"
)

func main() {
	ch := make(chan string)

	// Comment/uncomment this goroutine to test both cases
	// Simulate a slow message (after 3s)
	/*
		go func() {
			time.Sleep(3 * time.Second)
			ch <- "hello"
		}()
	*/

	select {
	case msg := <-ch:
		fmt.Println("Received:", msg)
	case <-time.After(2 * time.Second):
		fmt.Println("Timeout!")
	}
}
