package main

import "fmt"

func main() {
	p1 := person{"Alice", 23}
	p2 := person{name: "Alice", age: 23}

	fmt.Println(p1)
	fmt.Println(p2)

	// access and modify struct fields
	p1.age = 30
	fmt.Println(p1, p1.age)

	// structs with functions attached
	r1 := rectangle{width: 10, height: 5}
	fmt.Println("Area", r1.area())

	// embedded structs
	e1 := employee{name: "Jhon", address: address{city: "Dhaka", state: "BD"}}
	fmt.Println(e1)
	fmt.Println(e1.city)
}

type person struct {
	name string
	age  int
}

// structs with functions attached
type rectangle struct {
	width  float64
	height float64
}

func (r rectangle) area() float64 {
	return r.width * r.height
}

// embedded structs
type address struct {
	city  string
	state string
}

type employee struct {
	name string
	address
}
