package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	// command-line arguments
	// args := os.Args
	//
	// if len(args) < 2 {
	// 	fmt.Println("Please provide some arguments.")
	// 	return
	// }
	//
	// fmt.Println("Arguments:", args)

	// print to stdout
	fmt.Print("Hello World ")
	fmt.Println("Hello World")
	fmt.Printf("Name: %s, Age: %d\n", "Alice", 30)
	fmt.Printf("Name: %v, Age: %v\n", "Alice", 30)
	os.Stdout.Write([]byte("Hello\n"))

	// print to stderr
	fmt.Fprintln(os.Stderr, "This is an error message")
	log.Println("This is an error message")
	os.Stderr.Write([]byte("The is an error message\n"))

	// input from stdin
	// name := ""
	// age := 0
	//
	// fmt.Print("Enter your name: ")
	// fmt.Scan(&name)
	//
	// fmt.Print("Enter your age: ")
	// fmt.Scan(&age)
	//
	// fmt.Printf("Hello, %v! You are %v years old\n", name, age)
	//
	// // using bufio
	// reader := bufio.NewReader(os.Stdin)
	//
	// fmt.Print("Enter you full name: ")
	// name, err := reader.ReadString('\n')
	// if err != nil {
	// 	panic(err)
	// }
	// fmt.Println("Hello", name)
	//
	// // reading multiple value with scanf
	// var product string
	// var price float64
	//
	// fmt.Print("Enter product and price (e.g. 'Book 29.99'): ")
	// fmt.Scanf("%s %f", &product, &price)
	//
	// fmt.Printf("Product: %s, Price: $%.2f\n", product, price)
}
