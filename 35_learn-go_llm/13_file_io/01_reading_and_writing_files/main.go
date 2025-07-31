package main

import (
	"fmt"
	"os"
)

func main() {
	file, err := os.Create("./input.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	count, err := file.WriteString("Hello from Go File IO")
	if err != nil {
		panic(err)
	}
	fmt.Println("Result of WriteString: ", count)

	data, err := os.ReadFile("./input.txt")
	if err != nil {
		panic(err)
	}

	fmt.Println("File contents:")
	fmt.Println(string(data))
}
