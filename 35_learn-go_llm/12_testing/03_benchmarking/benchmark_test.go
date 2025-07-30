package benchmarking

import "testing"

func BenchmarkConcatLoop(b *testing.B) {
	strs := []string{"hello", "world", "test"}
	for i := 0; i < b.N; i++ {
		ConcatLoop(strs)
	}
}

func BenchmarkConcatBuilder(b *testing.B) {
	strs := []string{"hello", "world", "test"}
	for i := 0; i < b.N; i++ {
		ConcatBuilder(strs)
	}
}

// go test -bench=.
