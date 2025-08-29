package main

import (
	"fmt"
)

func main() {
	pings := make(chan string, 1)
	pongs := make(chan string, 1)

	ping(pings, "passed message")
	pong(pings, pongs)

	fmt.Println(<-pongs)
}

// only accepts send-only channels
func ping(pings chan<- string, msg string) {
	pings <- msg
}

// accepts receive-only channel for input, send-only for output
func pong(pings <-chan string, pongs chan<- string) {
	msg := <-pings
	pongs <- msg
}

// Additional example showing channel directions in function signatures
// func producer(out chan<- int) {
// 	for i := 0; i < 5; i++ {
// 		out <- i
// 		time.Sleep(100 * time.Millisecond)
// 	}
// 	close(out)
// }
//
// func consumer(in <-chan int) {
// 	for value := range in {
// 		fmt.Printf("Received: %d\n", value)
// 	}
// }
