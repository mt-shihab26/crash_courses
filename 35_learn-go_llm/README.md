# Learn Go from LLM

## Beginner Topics

### 1. Basic Syntax & Language Fundamentals

- [x] Go installation and setup
- [x] `main` function and `package main`
- [x] `import` statements
- [x] Variables (`var`, `:=`)
- [x] Constants
- [x] Data types (int, float, string, bool)
- [x] Comments
- [x] Type conversions
- [x] Naming conventions

### 2. Control Structures

- [x] `if`, `else`
- [x] `switch` statements
- [x] `for` loops (no `while` in Go)
- [x] `break`, `continue`
- [x] `goto`

### 3. Functions

- [x] Defining and calling functions
- [x] Parameters and return values
- [x] Multiple return values
- [x] Variadic functions
- [x] Anonymous functions
- [x] Closures
- [x] Recursion
- [x] Defer statement

### 4. Data Structures

- [x] Arrays
- [x] Slices
- [x] Maps
- [x] Structs (custom types)
- [x] Pointers

### 5. Basic I/O and Strings

- [x] Reading and writing input/output
- [x] String formatting (`fmt.Sprintf`)
- [x] String manipulation (`strings` package)

## Intermediate Topics

### 6. Collections & Built-in Functions

- [x] Built-in functions (`len`, `append`, `copy`, etc.)
- [x] Deep vs shallow copy
- [x] Sorting with `sort` package

### 7. Methods & Interfaces

- [x] Method receivers (value vs pointer)
- [x] Interfaces and interface types
- [x] Type assertions
- [x] Type switches
- [x] Empty interface (`interface{}`)

### 8. Error Handling

- [x] Built-in error type
- [x] Returning errors from functions
- [x] Custom error types
- [x] `errors.New` and `fmt.Errorf`
- [x] Error wrapping (Go 1.13+)

### 9. Concurrency

- [x] Goroutines
- [x] Channels
- [x] Buffered vs unbuffered channels
- Channel directions
- `select` statement
- `sync` package (Mutex, WaitGroup)
- `context` package for cancellation

### 10. Modules & Dependency Management

- Introduction to Go Modules (`go mod`)
- `go get`, `go install`
- Semantic versioning
- Vendoring

### 11. Packages and Project Structure

- Creating reusable packages
- Standard library overview
- Organizing Go projects
- Internal packages
- Documentation with `godoc`

## Advanced Topics

### 12. Testing

- Writing unit tests with `testing` package
- Table-driven tests
- Benchmarking (`go test -bench`)
- Mocks and test coverage
- Using `testify` or other test libraries

### 13. File I/O

- Reading and writing files
- File paths and OS operations
- Buffering and scanning files

### 14. Networking

- Creating HTTP clients and servers
- RESTful APIs with `net/http`
- Middleware patterns
- Handling JSON with `encoding/json`
- WebSockets (via `gorilla/websocket`)

### 15. Reflection

- `reflect` package
- Type metadata and dynamic access
- When to avoid reflection

### 16. Generics (Go 1.18+)

- Introduction to type parameters
- Writing generic functions and types
- Constraints
- Type inference

### 17. Advanced Concurrency Patterns

- Worker pools
- Pipelines
- Rate limiting
- Deadlock prevention
- `context.Context` best practices

## Tools, Practices, and Ecosystem

### 18. Formatting & Linting

- `gofmt`, `goimports`
- `golint`, `staticcheck`, `govet`
- `golangci-lint`

### 19. Build & Deployment

- `go build`, `go run`, `go install`
- Cross-compilation
- Embedding static files (Go 1.16+)

### 20. Code Organization & Best Practices

- Idiomatic Go (Effective Go)
- Composition over inheritance
- Minimal interfaces
- Avoiding global variables
- Handling panics and recover

### 21. Working with Databases

- SQL with `database/sql`
- Using ORM (e.g. `gorm`)
- Transactions and prepared statements

### 22. Popular Frameworks & Libraries

- Web frameworks: `gin`, `echo`, `fiber`
- CLI: `cobra`, `urfave/cli`
- Logging: `log`, `zap`, `logrus`
- Testing: `testify`, `httptest`

## Optional Topics (as needed)

- Learn meta programming golang
- Learn Design Pattern for Building to Application
- WebAssembly with Go
- Embedding in other apps (C/C++)
- Mobile apps with Go (gomobile)
- Using Go in Kubernetes development
- Interfacing with Redis, Kafka, etc.
