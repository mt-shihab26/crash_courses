package main

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"net/http/httptest"
	"strconv"
	"strings"
	"testing"
)

func TestDoubleHandler(t *testing.T) {
	tt := []struct {
		name   string
		value  string
		double int
		err    string
	}{
		{"double of 100", "100", 200, ""},
		{"missing value", "", 0, "missing value"},
		{"not a number", "hello", 0, "not a number: hello"},
	}

	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			r, err := http.NewRequest(
				"GET",
				fmt.Sprintf("localhost:8080/double?v=%v", tc.value),
				nil,
			)
			if err != nil {
				t.Errorf("could not created request: %v", err)
				return
			}
			rec := httptest.NewRecorder()
			doubleHandler(rec, r)
			res := rec.Result()
			defer res.Body.Close()
			if tc.err != "" {
				if res.StatusCode != http.StatusBadRequest {
					t.Errorf("expected status code bad request; got %v", res.StatusCode)
					return
				}
				body, err := io.ReadAll(res.Body)
				if err != nil {
					t.Errorf("could not read body: %v", err)
					return
				}
				if msg := strings.TrimSpace(string(body)); msg != tc.err {
					t.Errorf("expected error message: %v; got %s", tc.err, msg)
					return
				}
				return
			}
			if res.StatusCode != http.StatusOK {
				t.Errorf("expected status %v; got: %v", http.StatusOK, res.StatusCode)
			}
			body, err := io.ReadAll(res.Body)
			if err != nil {
				t.Errorf("could not read body: %v", err)
				return
			}
			d, err := strconv.Atoi(strings.TrimSpace(string(body)))
			if err != nil {
				t.Errorf("expected an integer: got %s", body)
				return
			}
			if d != tc.double {
				t.Errorf("expected double to be 200: got %v", d)
				return
			}
		})
	}
}

func TestRouting(t *testing.T) {
	srv := httptest.NewServer(handler())
	defer srv.Close()

	res, err := http.Get(fmt.Sprintf("%s/double?v=2", srv.URL))
	if err != nil {
		t.Fatalf("could not send GET request: %v", err)
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		t.Errorf("expected status OK; got %v", res.Status)
	}

	b, err := io.ReadAll(res.Body)
	if err != nil {
		t.Fatalf("could not read response: %v", err)
	}

	d, err := strconv.Atoi(string(bytes.TrimSpace(b)))
	if err != nil {
		t.Fatalf("expected an integer; got %s", b)
	}
	if d != 4 {
		t.Fatalf("expected double to be 4; got %v", d)
	}
}
