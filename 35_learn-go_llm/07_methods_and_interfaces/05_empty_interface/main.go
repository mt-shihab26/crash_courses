package main

import "fmt"

// func printAnything(i interface{}) {
// 	fmt.Println("Received:", i)
// }

func printAnything(i any) {
	fmt.Println("Received:", i)
}

func main() {
	printAnything("hello")
	printAnything(123)
	printAnything([]int{1, 2, 3})
}
