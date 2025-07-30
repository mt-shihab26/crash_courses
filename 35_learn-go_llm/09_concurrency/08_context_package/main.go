package main

import (
	"context"
	"fmt"
	"time"
)

func main() {
	ctx, cancel := context.WithCancel(context.Background())

	go doWork(ctx, "Worker")

	// Let it work for 2 seconds, then cancel
	time.Sleep(2 * time.Second)
	fmt.Println("Cancelling work...")
	cancel() // This sends cancellation signal

	// Give it time to handle cancellation
	time.Sleep(1 * time.Second)
	fmt.Println("Main function done")
}

func doWork(ctx context.Context, name string) {
	for i := range 10 {
		// Check if context was cancelled
		select {
		case <-ctx.Done():
			fmt.Printf("%s: cancelled! Reason: %v\n", name, ctx.Err())
			return
		default:
			// Continue working
			fmt.Printf("%s: working step %d\n", name, i)
			time.Sleep(500 * time.Millisecond)
		}
	}

	fmt.Printf("%s: completed all work!\n", name)
}
