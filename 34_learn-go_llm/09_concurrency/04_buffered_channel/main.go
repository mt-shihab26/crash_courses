package main

import (
	"fmt"
	"time"
)

// Demonstrates buffered channel - asynchronous communication
func goroute(ch chan string) {
	fmt.Println("Goroutine: Sending message 1...")
	ch <- "Message 1" // Doesn't block - buffer has space
	fmt.Println("Goroutine: Sent first message!")

	fmt.Println("Goroutine: Sending second message...")
	ch <- "Message 2" // Still doesn't block - buffer full now
	fmt.Println("Goroutine: Sent second message!")

	fmt.Println("Goroutine: Sending third message...")
	ch <- "Message 3" // This would block - buffer is full
	fmt.Println("Goroutine: Sent third message!")
}

func main() {
	ch := make(chan string, 2) // buffer size 2

	go goroute(ch)

	time.Sleep(1 * time.Second)

	fmt.Println("Main: Reading message...")
	fmt.Printf("Main: Got %s\n", <-ch)
	fmt.Printf("Main: Got %s\n", <-ch)
	fmt.Printf("Main: Got %s\n", <-ch) // This unblocks the third send

	time.Sleep(100 * time.Millisecond) // Give goroutine time to print
}
