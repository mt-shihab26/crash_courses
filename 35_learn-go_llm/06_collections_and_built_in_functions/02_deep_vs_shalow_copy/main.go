package main

import "fmt"

func main() {
	or := []int{1, 2, 3}

	// slice - shadow copy
	sh := or
	sh[0] = 999

	fmt.Println("Original (after shallow copy modified):", or)
	fmt.Println("Shallow copy:", sh)

	// slice - deep copy
	dp := make([]int, len(or))
	copy(dp, or)
	dp[0] = 555

	fmt.Println("Original (after deep copy modified):", or) // [1 2 3]
	fmt.Println("Deep copy:", dp)

	// map - shadow copy
	or2 := map[string]int{"a": 1, "b": 2}

	sh2 := or2
	sh2["a"] = 999

	fmt.Println(or2, sh2)

	// map - deep copy
	dp2 := deepCopyMap(or2)
	dp2["x"] = 888

	fmt.Println(or2, dp2)
}

func deepCopyMap(src map[string]int) map[string]int {
	dst := make(map[string]int)
	for k, v := range src {
		dst[k] = v
	}
	return dst
}
