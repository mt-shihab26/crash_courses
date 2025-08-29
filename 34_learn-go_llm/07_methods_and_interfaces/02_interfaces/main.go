package main

import "fmt"

type shape interface {
	area() float64
}

type circle struct {
	radis float64
}

type square struct {
	side float64
}

func (c circle) area() float64 {
	return 3.14 * c.radis * c.radis
}

func (s square) area() float64 {
	return s.side * s.side
}

func printArea(s shape) {
	fmt.Println("Area: ", s.area())
}

func main() {
	c := circle{radis: 3}
	s := square{side: 4}

	printArea(c)
	printArea(s)
}
