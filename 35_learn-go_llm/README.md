## **Beginner Topics**

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

- Defining and calling functions
- Parameters and return values
- Multiple return values
- Variadic functions
- Anonymous functions
- Closures
- Recursion
- Defer statement

### ✅ Data Structures

- Arrays
- Slices
- Maps
- Structs (custom types)
- Pointers

### ✅ Basic I/O and Strings

- Reading and writing input/output
- String formatting (`fmt.Sprintf`)
- String manipulation (`strings` package)

---

## 🟡 **Intermediate Topics**

### ✅ Collections & Built-in Functions

- Built-in functions (`len`, `append`, `copy`, etc.)
- Working with slices and maps effectively
- Deep vs shallow copy
- Sorting with `sort` package

### ✅ Methods & Interfaces

- Method receivers (value vs pointer)
- Interfaces and interface types
- Type assertions
- Type switches
- Empty interface (`interface{}`)

### ✅ Error Handling

- Built-in error type
- Returning errors from functions
- Custom error types
- `errors.New` and `fmt.Errorf`
- Error wrapping (Go 1.13+)

### ✅ Concurrency

- Goroutines
- Channels
- Buffered vs unbuffered channels
- Channel directions
- `select` statement
- `sync` package (Mutex, WaitGroup)
- `context` package for cancellation

### ✅ Modules & Dependency Management

- Introduction to Go Modules (`go mod`)
- `go get`, `go install`
- Semantic versioning
- Vendoring

### ✅ Packages and Project Structure

- Creating reusable packages
- Standard library overview
- Organizing Go projects
- Internal packages
- Documentation with `godoc`

---

## 🔵 **Advanced Topics**

### ✅ Testing

- Writing unit tests with `testing` package
- Table-driven tests
- Benchmarking (`go test -bench`)
- Mocks and test coverage
- Using `testify` or other test libraries

### ✅ File I/O

- Reading and writing files
- File paths and OS operations
- Buffering and scanning files

### ✅ Networking

- Creating HTTP clients and servers
- RESTful APIs with `net/http`
- Middleware patterns
- Handling JSON with `encoding/json`
- WebSockets (via `gorilla/websocket`)

### ✅ Reflection

- `reflect` package
- Type metadata and dynamic access
- When to avoid reflection

### ✅ Generics (Go 1.18+)

- Introduction to type parameters
- Writing generic functions and types
- Constraints
- Type inference

### ✅ Advanced Concurrency Patterns

- Worker pools
- Pipelines
- Rate limiting
- Deadlock prevention
- `context.Context` best practices

---

## ⚙️ **Tools, Practices, and Ecosystem**

### ✅ Formatting & Linting

- `gofmt`, `goimports`
- `golint`, `staticcheck`, `govet`
- `golangci-lint`

### ✅ Build & Deployment

- `go build`, `go run`, `go install`
- Cross-compilation
- Embedding static files (Go 1.16+)

### ✅ Code Organization & Best Practices

- Idiomatic Go (Effective Go)
- Composition over inheritance
- Minimal interfaces
- Avoiding global variables
- Handling panics and recover

### ✅ Working with Databases

- SQL with `database/sql`
- Using ORM (e.g. `gorm`)
- Transactions and prepared statements

### ✅ Popular Frameworks & Libraries

- Web frameworks: `gin`, `echo`, `fiber`
- CLI: `cobra`, `urfave/cli`
- Logging: `log`, `zap`, `logrus`
- Testing: `testify`, `httptest`

---

## 🧠 Optional Topics (as needed)

- WebAssembly with Go
- Embedding in other apps (C/C++)
- Mobile apps with Go (gomobile)
- Using Go in Kubernetes development
- Interfacing with Redis, Kafka, etc.

---
