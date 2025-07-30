package main

import (
	"fmt"
	"sync"
)

var (
	counter int        // shared variable
	mutex   sync.Mutex // protects counter
)

func increment(waitgroup *sync.WaitGroup) {
	defer waitgroup.Done()

	for range 1000 {
		mutex.Lock()   // lock before accessing shared data
		counter++      // safe to modify counter now
		mutex.Unlock() // unlock when done
	}
}

func main() {
	var waitgroup sync.WaitGroup

	// start 3 goroutines
	for range 3 {
		waitgroup.Add(1) // tell WaitGroup to expect 1 more goroutine
		go increment(&waitgroup)
	}

	waitgroup.Wait() // wait for all goroutines to finish

	fmt.Printf("Final counter value: %d\n", counter)
	fmt.Println("All goroutines completed!")
}
