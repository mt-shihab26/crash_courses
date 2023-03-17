package main

import (
	"fmt"
	"math/rand"
	"time"
)

func sum(c chan int, n int) {
	sm := 0
	for i := 1; i <= n; i++ {
		fmt.Println("called by ", n)
		sm += i
		time.Sleep(time.Duration(rand.Intn(100) * int(time.Millisecond)))
	}
	fmt.Println("done in ", n, " with sum ", sm)
	c <- sm
}

func main() {
	c := make(chan int)

	go sum(c, 100)
	go sum(c, 555)

	o := <-c
	fmt.Println(o)
	o = <-c
	fmt.Println(o)
}
