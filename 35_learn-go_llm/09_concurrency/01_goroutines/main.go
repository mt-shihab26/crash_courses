package main

import (
	"fmt"
	"time"
)

func sayHello(name string) {
	for i := range 3 {
		fmt.Printf("Hello %s! (%d)\n", name, i)
		time.Sleep(100 * time.Millisecond)
	}
}

func main() {
	// regular function call - blocks until complete
	sayHello("World")

	// goroutine - runs concurrently
	go sayHello("Alice")
	go sayHello("Bob")

	// wait a bit to see goroutine execute
	time.Sleep(500 * time.Millisecond)
	fmt.Println("main function ending")
}
