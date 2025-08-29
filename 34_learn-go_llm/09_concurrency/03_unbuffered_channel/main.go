package main

import (
	"fmt"
	"time"
)

func goroute(ch chan string) {
	fmt.Println("Goroutine: Sending message")
	ch <- "Hello from goroutine"
	fmt.Println("Goroutine: Sent successfully")
}

// Demonstrates unbuffered channel - synchronous communication
func main() {
	ch := make(chan string) // no buffer - synchronous

	go goroute(ch)

	time.Sleep(1 * time.Second) // delay samulation
	fmt.Println("Main: Waiting for message")

	message := <-ch
	fmt.Println("Main: Received message:", message)

	time.Sleep(100 * time.Millisecond) // Give goroutine time to print
}
