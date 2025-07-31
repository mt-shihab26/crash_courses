# Learn Go from LLM

## Beginner Topics

### 1. [x] Basic Syntax & Language Fundamentals

- [x] Go installation and setup
- [x] `main` function and `package main`
- [x] `import` statements
- [x] Variables (`var`, `:=`)
- [x] Constants
- [x] Data types (int, float, string, bool)
- [x] Comments
- [x] Type conversions
- [x] Naming conventions

### 2. [x] Control Structures

- [x] `if`, `else`
- [x] `switch` statements
- [x] `for` loops (no `while` in Go)
- [x] `break`, `continue`
- [x] `goto`

### 3. [x] Functions

- [x] Defining and calling functions
- [x] Parameters and return values
- [x] Multiple return values
- [x] Variadic functions
- [x] Anonymous functions
- [x] Closures
- [x] Recursion
- [x] Defer statement

### 4. [x] Data Structures

- [x] Arrays
- [x] Slices
- [x] Maps
- [x] Structs (custom types)
- [x] Pointers

### 5. [x] Basic I/O and Strings

- [x] Reading and writing input/output
- [x] String formatting (`fmt.Sprintf`)
- [x] String manipulation (`strings` package)

## Intermediate Topics

### 6. [x] Collections & Built-in Functions

- [x] Built-in functions (`len`, `append`, `copy`, etc.)
- [x] Deep vs shallow copy
- [x] Sorting with `sort` package

### 7. [x] Methods & Interfaces

- [x] Method receivers (value vs pointer)
- [x] Interfaces and interface types
- [x] Type assertions
- [x] Type switches
- [x] Empty interface (`interface{}`)

### 8. [x] Error Handling

- [x] Built-in error type
- [x] Returning errors from functions
- [x] Custom error types
- [x] `errors.New` and `fmt.Errorf`
- [x] Error wrapping (Go 1.13+)

### 9. [ ] Concurrency (not learn yet)

- [x] Goroutines
- [x] Channels
- [x] Buffered vs unbuffered channels
- [x] Channel directions
- [x] `select` statement
- [x] `sync` package (Mutex, WaitGroup)
- [x] `context` package for cancellation

### 10. [x] Modules & Dependency Management

- [x] Introduction to Go Modules (`go mod`)
- [x] `go get`, `go install`
- [x] Semantic versioning
- [x] Vendoring

### 11. [x] Packages and Project Structure

- [x] Creating reusable packages
- [x] Standard library overview
- [x] Organizing Go projects
- [x] Internal packages
- [x] Documentation with `godoc`

## Advanced Topics

### 12. [x] Testing

- [x] Writing unit tests with `testing` package
- [x] Table-driven tests
- [x] Benchmarking (`go test -bench`)
- [x] Mocks and test coverage

### 13. [x] File I/O

- [x] Reading and writing files
- [x] File paths and OS operations
- [x] Buffering and scanning files

### 14. [x] Networking

- [x] Creating HTTP clients and servers
- [x] RESTful APIs with `net/http`, Middleware patterns
- [x] Handling JSON with `encoding/json`

### 15. [x] Reflection

- [x] `reflect` package
- [x] Type metadata and dynamic access
- [x] When to avoid reflection

### 16. [x] Generics (Go 1.18+)

- [x] Introduction to type parameters
- [x] Writing generic functions and types
- [x] Constraints
- [x] Type inference

### 17. [x] Advanced Concurrency Patterns

- [x] Worker pools
- [x] Pipelines
- [x] Rate limiting
- [x] Deadlock prevention
- [x] `context.Context` best practices

## Tools, Practices, and Ecosystem

### 18. [x] Formatting & Linting

- [x] `gofmt`, `goimports`
- [x] `golint`, `staticcheck`, `govet`
- [x] `golangci-lint`

### 19. [x] Build & Deployment

- [x] `go build`, `go run`, `go install`
- [x] Cross-compilation
- [x] Embedding static files (Go 1.16+)

### 20. [x] Code Organization & Best Practices

- [x] Idiomatic Go (Effective Go)
- [x] Composition over inheritance
- [x] Minimal interfaces
- [x] Avoiding global variables
- [x] Handling panics and recover

### 21. [x] Working with Databases

- [x] SQL with `database/sql`
- [x] Transactions and prepared statements
