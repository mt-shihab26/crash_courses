package main

import "fmt"

func fact(c chan string, re chan int64, n int64) {
	r := int64(1)
	for i := int64(1); i <= n; i++ {
		r *= i
	}
	c <- fmt.Sprintf("Factorial of %v is %v", n, r)
	re <- r
}

func main() {
	c := make(chan string)
	r := make(chan int64)

	for i := int64(0); i <= 10; i++ {
		go fact(c, r, i)
	}

	for i := 0; i <= 10; i++ {
		o := <-c
		v := <-r
		fmt.Println(o, ":", v)
	}
}
