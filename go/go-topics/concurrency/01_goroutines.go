package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

func work(wg *sync.WaitGroup, message string) {
	fmt.Println(message, " called")
	defer wg.Done()
	for i := 0; i < 100; i++ {
		fmt.Println(message, i)
		time.Sleep(time.Duration(rand.Intn(100) * int(time.Millisecond)))
	}
}

func main() {
	wg := sync.WaitGroup{}

	defer fmt.Println("Done")
	defer wg.Wait()

	wg.Add(2)
	go work(&wg, "IDX from first func:")
	go work(&wg, "IDX from second func:")

	// wg.Wait()
	// fmt.Println("Done")
}
