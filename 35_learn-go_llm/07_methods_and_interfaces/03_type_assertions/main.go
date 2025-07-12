package main

import "fmt"

func describe(i any) {
	if v, ok := i.(string); ok {
		fmt.Println("It's a string: ", v)
	} else if v, ok := i.(int); ok {
		fmt.Println("It's a int: ", v)
	} else {
		fmt.Println("Not a string/int")
	}
}

func main() {
	describe("Hello")
	describe(42)
	describe(32.55)
}
