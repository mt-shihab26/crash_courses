package main

import "fmt"

func describe(i any) {
	switch v := i.(type) {
	case string:
		fmt.Println("It's a string: ", v)
	case int:
		fmt.Println("It's a int: ", v)
	default:
		fmt.Println("Not a string/int")
	}
}

func main() {
	describe("Hello")
	describe(42)
	describe(32.55)
}
