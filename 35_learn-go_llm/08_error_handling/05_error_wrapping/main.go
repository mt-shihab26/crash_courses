package main

import (
	"errors"
	"fmt"
)

var errNotFound = errors.New("item not found")

func fetchItem(id int) error {
	return fmt.Errorf("fetch failed %d: %w", id, errNotFound)
}

func main() {
	err := fetchItem(123)

	// Unwrap and check
	if errors.Is(err, errNotFound) {
		fmt.Println("Handled not found error:", err)
	}

	// Extract wrapped error
	fmt.Println("Unwrapped error:", errors.Unwrap(err))
}
