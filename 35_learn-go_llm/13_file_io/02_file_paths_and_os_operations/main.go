package main

import (
	"fmt"
	"os"
)

func main() {
	if _, err := os.Stat("example.txt"); os.IsNotExist(err) {
		fmt.Println("File does not exist.")
	} else {
		fmt.Println("File exists.")
	}
}
