package main

import "fmt"

func main() {
	ages := map[string]int{
		"Alice": 25,
		"Bob":   30,
		"Carol": 22,
	}

	fmt.Println(ages)

	// define map with make() function
	ages2 := make(map[string]int)
	ages2["Alice"] = 25
	ages2["Bob"] = 30
	ages2["Carol"] = 22

	fmt.Println(ages2, ages2["Alice"])

	// check if a key exists
	colors := map[string]string{
		"red":  "#ff0000",
		"blue": "#0000ff",
	}
	value, exists := colors["green"]
	if exists {
		fmt.Println("Green:", value)
	} else {
		fmt.Println("Green not found")
	}

	// delete a key
	delete(colors, "red")
	fmt.Println(colors)

	// iterate over maps
	for name, age := range ages {
		fmt.Println(name, age)
	}
}
