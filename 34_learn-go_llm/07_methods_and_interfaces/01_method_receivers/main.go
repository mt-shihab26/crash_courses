package main

import "fmt"

type counter struct {
	count int
}

func (c counter) incrementByValue() {
	c.count++
}

func (c *counter) incrementByPointer() {
	c.count++
}

func main() {
	c := counter{count: 0}

	c.incrementByValue()
	fmt.Println("After value receiver:", c.count)

	c.incrementByPointer()
	fmt.Println("After pointer receiver:", c.count)
}
