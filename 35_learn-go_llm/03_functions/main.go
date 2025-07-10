package main

import "fmt"

// define functions
func add(a int, b int) int {
	return a + b
}

// same times parameters once
func multiply(x, y int) int {
	return x * y
}

// multiple returns
func divide(dividend, divisor int) (int, int) {
	quotient := dividend / divisor
	remainder := dividend % divisor
	return quotient, remainder
}

// variadic functions
func sum(numbers ...int) int {
	total := 0
	for _, num := range numbers {
		total += num
	}
	return total
}

// recursion
func factorial(n int) int {
	if n == 0 {
		return 1
	}
	return n * (factorial(n - 1))
}

func main() {
	added := add(200, 10)
	fmt.Println("added =", added)

	times := multiply(200, 10)
	fmt.Println("times =", times)

	quotient, remainder := divide(25, 2)
	fmt.Printf("quotient = %v, remainder = %v\n", quotient, remainder)

	summation := sum(1, 2, 3, 4, 5, 10)
	fmt.Println("summation =", summation)

	// anonymous function
	great := func(name string) {

		fmt.Println("Hello,", name)

	}
	great("Shihab")

	// closures
	count := 0
	increment := func() int {
		count++
		return count
	}
	fmt.Println(increment())
	fmt.Println(increment())

	fmt.Println(factorial(10))

	// defer statement
	fmt.Println("Start")
	defer fmt.Println("Last to print")
	defer fmt.Println("Second last to print")
	fmt.Println("End")
	// Defer statements execute bottom to top
}
