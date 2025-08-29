package main

import (
	"fmt"
	"time"
)

func sendNumbers(ch chan int) {
	for i := range 5 {
		fmt.Printf("Sending: %d\n", i)
		ch <- i
		time.Sleep(500 * time.Millisecond)
	}
	close(ch)
}

func receiveNumbers(ch chan int) {
	for number := range ch {
		fmt.Printf("Received: %d\n", number)
	}
	fmt.Println("Channel closed, no more numbers to receive.")
}

func main() {
	numbers := make(chan int)

	go sendNumbers(numbers)

	receiveNumbers(numbers)

	fmt.Println("Done")
}
