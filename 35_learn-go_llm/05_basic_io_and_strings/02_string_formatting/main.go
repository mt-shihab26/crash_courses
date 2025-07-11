package main

import "fmt"

func main() {
	message := fmt.Sprintf("Name: %s | Age: %d | Salary: $%.2f", "Alice", 30, 65432.78)
	fmt.Println(message)

	message2 := fmt.Sprintf("ID: %05d | Name: %-10s", 42, "Alice")
	fmt.Println(message2)
}
