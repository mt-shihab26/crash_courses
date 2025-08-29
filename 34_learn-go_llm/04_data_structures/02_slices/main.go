package main

import "fmt"

func main() {
	// basic
	numbers := []int{10, 20, 30, 40}
	fmt.Println(numbers)

	// create slice from array
	arr := [5]int{1, 2, 3, 4, 5}
	slice := arr[1:4]
	fmt.Println(slice)

	// use make() function to create slice
	s := make([]int, 3) // length: 3, capacity: 3
	s[0] = 100
	s[1] = 200
	s[2] = 300
	fmt.Println(s)

	// appending elements to slice
	var nums []int
	nums = append(nums, 10)
	nums = append(nums, 20, 30)
	fmt.Println(nums)

	// iterating over slice
	for index, value := range nums {
		fmt.Println(index, value)
	}

	// copying slice
	original := []int{1, 2, 3}
	copied := make([]int, len(original))

	copy(copied, original)
	copied2 := original[:]

	fmt.Println("Original:", original)
	fmt.Println("Copied:", copied, copied2)

	// capacity & length
	fmt.Println("Length:", len(original))
	fmt.Println("Capacity:", cap(original))
}
