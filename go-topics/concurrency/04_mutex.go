package main

import (
	"fmt"
	"math/rand"
	"sync"
	"time"
)

var wg sync.WaitGroup

type SafeCounter struct {
	Mutex sync.Mutex
	Map   map[string]int
}

func (s *SafeCounter) Inc(key string, cn int) {
	s.Mutex.Lock()
	defer wg.Done()
	defer s.Mutex.Unlock()
	s.Map[key]++
	fmt.Println("call number:", cn)
	time.Sleep(time.Duration(rand.Intn(100) * int(time.Millisecond)))
}

func (s *SafeCounter) Value(key string) int {
	s.Mutex.Lock()
	defer s.Mutex.Unlock()
	return s.Map[key]
}

func main() {
	c := SafeCounter{Map: map[string]int{}}

	for i := 0; i < 200; i++ {
		wg.Add(1)
		go c.Inc("k", i)
	}

	wg.Wait()
	fmt.Println(c.Value("k"))
}
