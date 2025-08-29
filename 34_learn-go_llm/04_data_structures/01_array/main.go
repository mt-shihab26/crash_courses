package main

import "fmt"

// pass by value
func printArray(arr [3]int) {
	for _, v := range arr {
		fmt.Println(v)
	}
}

func main() {
	// var nums [3]int
	// nums[0] = 10
	// nums[1] = 30
	// nums[2] = 50

	// nums := [3]int{10, 30, 50}
	nums := [...]int{10, 30, 50}

	fmt.Println("Array: ", nums)
	fmt.Println("Array: ", len(nums))

	// iterating
	for index, number := range nums {
		fmt.Printf("Index: %v, Number: %v\n", index, number)
	}

	// multidimensional array
	var matrix [2][3]int = [2][3]int{
		{1, 2, 3},
		{4, 5, 6},
	}
	fmt.Println(matrix[1][2])

	printArray(nums)
}
