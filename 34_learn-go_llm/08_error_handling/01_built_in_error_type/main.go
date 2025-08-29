package main

import "fmt"

// type error interface {
//     Error() string
// }
// Any type that implements Error() string is considered an error.

type invalidNumber struct {
}

func (in invalidNumber) Error() string {
	return "This is an invalid number"
}

func isValidNumber(number int) (bool, error) {
	if number <= 0 {
		return false, invalidNumber{}
	}
	return true, nil
}

func main() {
	_, err := isValidNumber(-10)

	if err != nil {
		panic(err)
	}

	fmt.Println("The number is valid")
}
