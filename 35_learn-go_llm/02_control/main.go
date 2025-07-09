package main

import "fmt"

func main() {
	num := 0

	if num < 0 {
		fmt.Printf("%v is negative number\n", num)
	} else if 0 < num {
		fmt.Printf("%v is positive number\n", num)
	} else {
		fmt.Printf("%v is zero number\n", num)
	}

	switch {
	case num < 0:
		fmt.Printf("%v is negative number\n", num)
	case 0 < num:
		fmt.Printf("%v is positive number\n", num)
	default:
		fmt.Printf("%v is zero number\n", num)
	}

	day := "Tuesday"

	switch day {
	case "Monday":
		fmt.Println("Start of the week")
	case "Tuesday", "Wednesday", "Thursday":
		fmt.Println("Midweek")
	case "Friday":
		fmt.Println("Weekend is coming!")
	default:
		fmt.Println("It's the weekend!")
	}

	for i := 0; i < 10; i += 1 {
		if i == 5 {
			continue
		}
		fmt.Printf("index: %v\n", i)
	}

	// while loop on go
	i := 0
	for i < 10 {
		fmt.Printf("index: %v\n", i)
		if i == 5 {
			break
		}
		i += 1
	}

	// 	fmt.Println("Start")
	// 	goto skip
	// 	fmt.Println("Want's run")
	//
	// skip:
	// 	fmt.Println("Skipping to here")

	// for i := 0; i < 3; i++ {
	// 	for j := 0; j < 3; j++ {
	// 		if i == 1 && j == 1 {
	// 			goto done
	// 		}
	// 		fmt.Println(i, j)
	// 	}
	// }

	for i := range 3 {
		for j := range 3 {
			if i == 1 && j == 1 {
				goto done
			}
			fmt.Println(i, j)
		}
	}

done:
	fmt.Println("Exited nested loops")
}
