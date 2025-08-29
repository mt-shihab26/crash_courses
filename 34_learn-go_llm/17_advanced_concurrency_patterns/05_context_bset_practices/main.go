package main

import (
	"context"
	"fmt"
	"time"
)

func slowOperation(ctx context.Context) {
	select {
	case <-time.After(3 * time.Second):
		fmt.Println("Finished work")
	case <-ctx.Done():
		fmt.Println("Canceled:", ctx.Err())
	}
}

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
	defer cancel()

	slowOperation(ctx)
}
