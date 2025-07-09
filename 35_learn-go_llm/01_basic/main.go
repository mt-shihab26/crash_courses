package main

import "fmt"

var x0 = 10

const pi = 3.1416

const name string = "Golang"

const (
	a = 1
	b = 1
	c = ""
)

func main() {
	var x1 = 50

	x2 := 32

	const pi2 = 3.14159
	const name2 string = "GoLang 2"

	fmt.Println(x0, x1, x2, pi, pi2, name, name2, a, b, c)
}
