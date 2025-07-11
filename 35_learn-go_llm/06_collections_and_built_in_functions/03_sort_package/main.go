package main

import (
	"fmt"
	"sort"
)

func main() {
	nums := []int{42, 5, 13, 7, 99}
	sort.Ints(nums)
	fmt.Println("Sorted ints:", nums)

	names := []string{"Charlie", "Bob", "Alice"}
	sort.Strings(names)
	fmt.Println("Sorted names:", names)

	values := []int{10, 4, 20, 7}
	sort.Sort(sort.Reverse(sort.IntSlice(values)))
	fmt.Println("Descending:", values)

	a := []int{1, 2, 3}
	b := []int{3, 2, 1}

	fmt.Println("Is a sorted?", sort.IntsAreSorted(a))
	fmt.Println("Is b sorted?", sort.IntsAreSorted(b))
}
