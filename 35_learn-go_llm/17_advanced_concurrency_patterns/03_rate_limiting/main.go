package main

import (
	"fmt"
	"time"
)

func main() {
	// 1 request every 200ms
	limiter := time.Tick(200 * time.Millisecond)

	requests := make(chan int, 5)
	for i := 1; i <= 5; i++ {
		requests <- i
	}
	close(requests)

	for req := range requests {
		<-limiter
		fmt.Println("Handling request", req)
	}
}
