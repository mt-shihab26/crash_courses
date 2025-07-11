package main

import "fmt"

func main() {
	x := 10

	// var p *int = &x

	p := &x

	fmt.Println("Value of x: ", x)
	fmt.Println("Address of x: ", p)
	fmt.Println("Value via pointer of x: ", *p)

	// modify value with pointer
	modify(p)
	modify(&x)

	fmt.Println("------")
	fmt.Println("Value of x: ", x)
	fmt.Println("Address of x: ", p)
	fmt.Println("Value via pointer of x: ", *p)

	// pointer to struct
	p1 := person{name: "Shihab", age: 23}
	ptr := &p1

	ptr.age = 31
	fmt.Println(p1, p1.age)

	// pointer as return value
	p2 := createPointer()
	fmt.Println(*p2)

	// pointer to pointer
	x2 := 5
	px1 := &x2
	px2 := &px1
	fmt.Println(**px2)

	// nil pointer
	var py *int
	if py == nil {
		fmt.Println("Pointer is nil")
	}

	// pointers in arrays
	numsz := [3]int{1, 2, 3}
	fmt.Println(numsz)
	modifyArray(numsz)
	fmt.Println(numsz)

	// pointers in slices
	numsy := []int{1, 2, 3}
	fmt.Println(numsy)
	modifySlice(numsy)
	fmt.Println(numsy)
}

func modify(n *int) {
	*n = *n * 5
}

type person struct {
	name string
	age  int
}

func createPointer() *int {
	x := 42
	return &x
}

// array is not modify
func modifyArray(s [3]int) {
	s[0] = 100
}

// slice will modify
func modifySlice(s []int) {
	s[0] = 100
}
