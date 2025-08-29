package main

import (
	"errors"
	"fmt"
)

func example1() error {
	return errors.New("somethings went wrong")
}

func example2(name string) error {
	return fmt.Errorf("invalid input: %s", name)
}

func main() {
	fmt.Println(example1())
	fmt.Println(example2("nil"))
}
