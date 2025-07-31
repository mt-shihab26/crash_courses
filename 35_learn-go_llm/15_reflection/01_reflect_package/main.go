package main

import (
	"fmt"
	"reflect"
)

func main() {
	x := 3.4

	t := reflect.TypeOf(x)
	v := reflect.ValueOf(x)

	fmt.Println("Type: ", t)
	fmt.Println("Value: ", v)
	fmt.Println("Kind: ", v.Kind())
}
