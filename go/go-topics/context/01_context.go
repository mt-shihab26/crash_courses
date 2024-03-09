package main

import (
	"context"
	"fmt"
)

func addKeyValue(ctx context.Context, key any, value any) context.Context {
	return context.WithValue(ctx, key, value)
}

func main() {
	ctx := context.Background()
	ctx = addKeyValue(ctx, "request_id", 1234)
	ctx = addKeyValue(ctx, "request_id2", 12341234)

	fmt.Println(ctx.Value("request_id"))
	fmt.Println(ctx.Value("request_id2"))
}
