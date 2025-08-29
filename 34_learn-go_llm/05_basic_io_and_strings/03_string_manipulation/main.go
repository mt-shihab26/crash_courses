package main

import (
	"fmt"
	"strings"
)

func main() {
	str := " Hello World!!! "

	fmt.Println(strings.ToUpper(str))
	fmt.Println(strings.ToLower(str))

	fmt.Println(strings.Contains(str, "World"))
	fmt.Println(strings.HasPrefix(str, "world"))
	fmt.Println(strings.HasSuffix(str, "world"))

	parts := strings.Split(str, " ")
	fmt.Println(parts)
	fmt.Println(strings.Join(parts, "+"))

	fmt.Println(strings.TrimSpace(str))
	fmt.Println(strings.Trim(strings.TrimSpace(str), "!"))

	fmt.Println(strings.Replace(str, "World", "Hello", 1))
	fmt.Println(strings.ReplaceAll(str, "World", "Hello"))

	str2 := "go go go"

	fmt.Println(strings.Count(str2, "go"))
	fmt.Println(strings.Index(str2, "go"))
	fmt.Println(strings.LastIndex(str2, "go"))
}
