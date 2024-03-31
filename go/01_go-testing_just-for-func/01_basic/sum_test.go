package sum_test

import (
	"sum"
	"testing"
)

func TestInts(t *testing.T) {
	// t.Fail()
	// t.Fatalf("This test failed stopped running")
	// t.Errorf("This test failed because I said so")

	s := sum.Ints(1, 2, 3, 4, 5)
	if s != 15 {
		t.Errorf("Sum of one to five should be 15; got %v", s)
	}

	s = sum.Ints()
	if s != 0 {
		t.Errorf("Sum of no arguments should be 0; got %v", s)
	}

	s = sum.Ints(1, -1)
	if s != 0 {
		t.Errorf("Sum of 1 and -1 should be 0; got %v", s)
	}

}

func TestInts2(t *testing.T) {
	tt := []struct {
		name    string
		numbers []int
		sum     int
	}{
		{"one to five", []int{1, 2, 3, 4, 5}, 15},
		{"no numbers", nil, 0},
		{"one and minus one", []int{1, -1}, 0},
	}

	for _, tc := range tt {
		s := sum.Ints(tc.numbers...)
		if s != tc.sum {
			t.Errorf("Sum of %v and %v should be 0; got %v", tc.name, tc.sum, s)
		}
	}
}

func TestInts3(t *testing.T) {
	tt := []struct {
		name    string
		numbers []int
		sum     int
	}{
		{"one to five", []int{1, 2, 3, 4, 5}, 15},
		{"no numbers", nil, 0},
		{"one and minus one", []int{1, -1}, 0},
	}

	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			s := sum.Ints(tc.numbers...)
			if s != tc.sum {
				t.Fatalf("Sum of %v and %v should be 0; got %v", tc.name, tc.sum, s)
			}
		})
	}
}
