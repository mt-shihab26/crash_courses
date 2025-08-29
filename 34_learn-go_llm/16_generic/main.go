package main

import (
	"fmt"
)

// ---------- Generic Function with Constraint ----------

// Ordered is a constraint that allows comparison operators (<, >, etc.)
type Ordered interface {
	~int | ~float64 | ~string
}

// Max returns the larger of two values of any ordered type
func Max[T Ordered](a, b T) T {
	if a > b {
		return a
	}
	return b
}

// ---------- Generic Stack Type ----------

type Stack[T any] struct {
	items []T
}

func (s *Stack[T]) Push(item T) {
	s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() T {
	n := len(s.items)
	if n == 0 {
		var zero T
		return zero // return zero value if empty
	}
	last := s.items[n-1]
	s.items = s.items[:n-1]
	return last
}

func (s *Stack[T]) IsEmpty() bool {
	return len(s.items) == 0
}

// ---------- Main Program ----------

func main() {
	// Generic Max function
	fmt.Println("Max of 5 and 10:", Max(5, 10))                         // int
	fmt.Println("Max of 3.14 and 2.71:", Max(3.14, 2.71))               // float64
	fmt.Println(`Max of "apple" and "banana":`, Max("apple", "banana")) // string

	// Generic Stack[int]
	intStack := Stack[int]{}
	intStack.Push(1)
	intStack.Push(2)
	intStack.Push(3)
	fmt.Println("Popped from intStack:", intStack.Pop())

	// Generic Stack[string]
	strStack := Stack[string]{}
	strStack.Push("Go")
	strStack.Push("Generics")
	fmt.Println("Popped from strStack:", strStack.Pop())

	// Check IsEmpty method
	fmt.Println("Is intStack empty?", intStack.IsEmpty())
}
