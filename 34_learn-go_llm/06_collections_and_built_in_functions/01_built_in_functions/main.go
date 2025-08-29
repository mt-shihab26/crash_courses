package main

import "fmt"

func main() {
	// len()
	str := "Golnag"
	arr := [3]int{1, 2, 3}
	sli := []int{10, 20, 30}
	mpa := map[string]int{"a": 1, "b": 2}

	fmt.Println(len(str))
	fmt.Println(len(arr))
	fmt.Println(len(sli))
	fmt.Println(len(mpa))

	// append()
	nums := []int{1, 2, 3}
	nums = append(nums, 4, 5)

	fmt.Println(nums)

	// copy()
	src := []int{1, 2, 3}
	dst := make([]int, 2)

	count := copy(dst, src)

	fmt.Println(src)
	fmt.Println(dst)
	fmt.Println(count)

	// make()
	s := make([]int, 5)
	m := make(map[string]int)
	c := make(chan int)

	fmt.Println(s)
	fmt.Println(m)
	fmt.Println(c)

	// new() – allocate pointer to Zeroed Value
	p := new(int)
	fmt.Println(*p)
	*p = 42
	fmt.Println(*p)

	// delete()
	m2 := map[string]int{"a": 1, "b": 2}
	delete(m2, "a")
	fmt.Println(m2)

	// close() - close channel
	close(c)
}
