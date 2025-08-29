package main

import (
	_ "embed"
	"fmt"
)

//go:embed hello.txt
var hello string

func main() {
	fmt.Println(hello)
}
