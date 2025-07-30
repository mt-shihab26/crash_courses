# Go Packages & Project Structure

## Creating Reusable Packages

A package in Go is a collection of Go files in the same directory that share the same package declaration.

### Basic Package Structure

```
myproject/
├── go.mod
├── main.go
├── mathutils/
│   ├── calculator.go
│   └── geometry.go
├── stringutils/
│   ├── format.go
│   └── validation.go
└── internal/
    └── config/
        └── settings.go
```

### Example: Math Utilities Package

**mathutils/calculator.go:**

```go
// Package mathutils provides mathematical utility functions.
package mathutils

import "errors"

// Add returns the sum of two integers.
func Add(a, b int) int {
    return a + b
}

// Subtract returns the difference between two integers.
func Subtract(a, b int) int {
    return a - b
}

// Divide returns the quotient of two integers.
// Returns an error if the divisor is zero.
func Divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// multiply is a private function (lowercase first letter)
func multiply(a, b int) int {
    return a * b
}

// Multiply is a public wrapper for the private multiply function
func Multiply(a, b int) int {
    return multiply(a, b)
}
```

**mathutils/geometry.go:**

```go
package mathutils

import "math"

// Circle represents a circle with a radius.
type Circle struct {
    Radius float64
}

// Area calculates the area of the circle.
func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

// Circumference calculates the circumference of the circle.
func (c Circle) Circumference() float64 {
    return 2 * math.Pi * c.Radius
}

// Rectangle represents a rectangle with width and height.
type Rectangle struct {
    Width, Height float64
}

// Area calculates the area of the rectangle.
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Perimeter calculates the perimeter of the rectangle.
func (r Rectangle) Perimeter() float64 {
    return 2 * (r.Width + r.Height)
}

// Shape interface for common geometric operations
type Shape interface {
    Area() float64
}

// GetShapeInfo returns information about any shape
func GetShapeInfo(s Shape) string {
    return fmt.Sprintf("Shape area: %.2f", s.Area())
}
```

### Example: String Utilities Package

**stringutils/format.go:**

```go
// Package stringutils provides string manipulation utilities.
package stringutils

import (
    "fmt"
    "strings"
    "unicode"
)

// Title converts a string to title case.
func Title(s string) string {
    return strings.Title(strings.ToLower(s))
}

// Reverse returns the reversed string.
func Reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

// Capitalize capitalizes the first letter of a string.
func Capitalize(s string) string {
    if len(s) == 0 {
        return s
    }

    runes := []rune(s)
    runes[0] = unicode.ToUpper(runes[0])
    return string(runes)
}

// TruncateWithEllipsis truncates a string and adds ellipsis if needed.
func TruncateWithEllipsis(s string, maxLen int) string {
    if len(s) <= maxLen {
        return s
    }

    if maxLen <= 3 {
        return s[:maxLen]
    }

    return s[:maxLen-3] + "..."
}

// PadLeft pads a string with spaces on the left to reach target length.
func PadLeft(s string, length int) string {
    if len(s) >= length {
        return s
    }
    return strings.Repeat(" ", length-len(s)) + s
}
```

**stringutils/validation.go:**

```go
package stringutils

import (
    "regexp"
    "strings"
)

// IsEmail validates if a string is a valid email format.
func IsEmail(email string) bool {
    emailRegex := regexp.MustCompile(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`)
    return emailRegex.MatchString(email)
}

// IsEmpty checks if a string is empty or contains only whitespace.
func IsEmpty(s string) bool {
    return strings.TrimSpace(s) == ""
}

// ContainsOnlyAlpha checks if string contains only alphabetic characters.
func ContainsOnlyAlpha(s string) bool {
    if len(s) == 0 {
        return false
    }

    for _, r := range s {
        if !((r >= 'a' && r <= 'z') || (r >= 'A' && r <= 'Z')) {
            return false
        }
    }
    return true
}

// IsNumeric checks if string contains only numeric characters.
func IsNumeric(s string) bool {
    if len(s) == 0 {
        return false
    }

    for _, r := range s {
        if r < '0' || r > '9' {
            return false
        }
    }
    return true
}

// ValidateLength checks if string length is within specified range.
func ValidateLength(s string, min, max int) bool {
    length := len(s)
    return length >= min && length <= max
}
```

### Using Your Packages

**main.go:**

```go
package main

import (
    "fmt"
    "log"

    "github.com/yourusername/myproject/mathutils"
    "github.com/yourusername/myproject/stringutils"
)

func main() {
    // Using mathutils package
    sum := mathutils.Add(10, 5)
    fmt.Printf("10 + 5 = %d\n", sum)

    result, err := mathutils.Divide(10, 2)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Printf("10 / 2 = %d\n", result)

    // Using geometry types
    circle := mathutils.Circle{Radius: 5.0}
    fmt.Printf("Circle area: %.2f\n", circle.Area())

    rectangle := mathutils.Rectangle{Width: 4.0, Height: 6.0}
    fmt.Printf("Rectangle area: %.2f\n", rectangle.Area())

    // Using stringutils package
    text := "hello world"
    fmt.Printf("Capitalized: %s\n", stringutils.Capitalize(text))
    fmt.Printf("Reversed: %s\n", stringutils.Reverse(text))
    fmt.Printf("Is email valid: %t\n", stringutils.IsEmail("test@example.com"))

    longText := "This is a very long string that needs truncation"
    fmt.Printf("Truncated: %s\n", stringutils.TruncateWithEllipsis(longText, 20))
}
```

## Standard Library Overview

Go's standard library is extensive and well-designed. Here are key packages:

### Core Packages

```go
package main

import (
    "fmt"      // Formatted I/O
    "strings"  // String manipulation
    "strconv"  // String conversions
    "time"     // Time and date
    "math"     // Mathematical functions
    "sort"     // Sorting algorithms
    "errors"   // Error handling
    "context"  // Context for cancellation
)

func demonstrateStandardLibrary() {
    // fmt package
    name := "Alice"
    age := 30
    fmt.Printf("Name: %s, Age: %d\n", name, age)

    // strings package
    text := "  Hello, World!  "
    cleaned := strings.TrimSpace(text)
    words := strings.Split(cleaned, " ")
    joined := strings.Join(words, "-")
    fmt.Println("Cleaned and joined:", joined)

    // strconv package
    numStr := "42"
    num, err := strconv.Atoi(numStr)
    if err == nil {
        fmt.Printf("Converted number: %d\n", num)
    }

    // time package
    now := time.Now()
    formatted := now.Format("2006-01-02 15:04:05")
    fmt.Println("Current time:", formatted)

    // math package
    result := math.Sqrt(16)
    fmt.Printf("Square root of 16: %.2f\n", result)
}
```

### I/O and File Operations

```go
package main

import (
    "bufio"
    "encoding/json"
    "io"
    "os"
    "path/filepath"
)

// FileOperations demonstrates file I/O operations
func FileOperations() {
    // Writing to file
    file, err := os.Create("example.txt")
    if err != nil {
        panic(err)
    }
    defer file.Close()

    writer := bufio.NewWriter(file)
    writer.WriteString("Hello, File!\n")
    writer.WriteString("Second line\n")
    writer.Flush()

    // Reading from file
    readFile, err := os.Open("example.txt")
    if err != nil {
        panic(err)
    }
    defer readFile.Close()

    scanner := bufio.NewScanner(readFile)
    for scanner.Scan() {
        fmt.Println("Read:", scanner.Text())
    }

    // JSON operations
    type Person struct {
        Name string `json:"name"`
        Age  int    `json:"age"`
    }

    person := Person{Name: "Bob", Age: 25}
    jsonData, _ := json.Marshal(person)
    fmt.Println("JSON:", string(jsonData))

    // File path operations
    dir := "/home/user/documents"
    filename := "report.pdf"
    fullPath := filepath.Join(dir, filename)
    fmt.Println("Full path:", fullPath)
    fmt.Println("Extension:", filepath.Ext(fullPath))
    fmt.Println("Base name:", filepath.Base(fullPath))
}
```

### HTTP and Networking

```go
package main

import (
    "encoding/json"
    "net/http"
    "log"
    "time"
)

type APIResponse struct {
    Message   string    `json:"message"`
    Timestamp time.Time `json:"timestamp"`
    Status    string    `json:"status"`
}

func HTTPExample() {
    // HTTP Server
    http.HandleFunc("/api/status", func(w http.ResponseWriter, r *http.Request) {
        response := APIResponse{
            Message:   "Server is running",
            Timestamp: time.Now(),
            Status:    "OK",
        }

        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(response)
    })

    http.HandleFunc("/api/users", handleUsers)

    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}

func handleUsers(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case "GET":
        // Handle GET request
        users := []string{"Alice", "Bob", "Charlie"}
        json.NewEncoder(w).Encode(users)
    case "POST":
        // Handle POST request
        var user map[string]interface{}
        json.NewDecoder(r.Body).Decode(&user)
        fmt.Printf("Received user: %+v\n", user)
        w.WriteHeader(http.StatusCreated)
    default:
        w.WriteHeader(http.StatusMethodNotAllowed)
    }
}
```

## Organizing Go Projects

### Standard Project Layout

```
myapp/
├── cmd/                    # Main applications
│   ├── server/
│   │   └── main.go
│   └── cli/
│       └── main.go
├── internal/               # Private application code
│   ├── config/
│   │   └── config.go
│   ├── handler/
│   │   ├── user.go
│   │   └── product.go
│   ├── service/
│   │   ├── user.go
│   │   └── product.go
│   └── repository/
│       ├── user.go
│       └── product.go
├── pkg/                    # Public library code
│   ├── logger/
│   │   └── logger.go
│   └── validator/
│       └── validator.go
├── api/                    # API definitions
│   └── openapi.yaml
├── web/                    # Web assets
│   ├── static/
│   └── templates/
├── scripts/                # Build and deployment scripts
│   └── build.sh
├── configs/                # Configuration files
│   ├── local.yaml
│   └── production.yaml
├── deployments/            # Deployment configurations
│   └── docker-compose.yml
├── test/                   # Integration tests
│   └── integration_test.go
├── docs/                   # Documentation
│   └── README.md
├── go.mod
├── go.sum
├── Makefile
└── README.md
```

### Example: E-commerce Application Structure

**cmd/server/main.go:**

```go
package main

import (
    "log"
    "net/http"

    "github.com/yourusername/ecommerce/internal/config"
    "github.com/yourusername/ecommerce/internal/handler"
    "github.com/yourusername/ecommerce/internal/repository"
    "github.com/yourusername/ecommerce/internal/service"
    "github.com/yourusername/ecommerce/pkg/logger"
)

func main() {
    // Load configuration
    cfg := config.Load()

    // Initialize logger
    log := logger.New(cfg.LogLevel)

    // Initialize repositories
    userRepo := repository.NewUserRepository(cfg.DatabaseURL)
    productRepo := repository.NewProductRepository(cfg.DatabaseURL)

    // Initialize services
    userService := service.NewUserService(userRepo, log)
    productService := service.NewProductService(productRepo, log)

    // Initialize handlers
    userHandler := handler.NewUserHandler(userService, log)
    productHandler := handler.NewProductHandler(productService, log)

    // Setup routes
    http.HandleFunc("/api/users", userHandler.HandleUsers)
    http.HandleFunc("/api/products", productHandler.HandleProducts)

    log.Info("Server starting on port", cfg.Port)
    log.Fatal(http.ListenAndServe(":"+cfg.Port, nil))
}
```

**internal/config/config.go:**

```go
package config

import (
    "os"
)

type Config struct {
    Port        string
    DatabaseURL string
    LogLevel    string
    JWTSecret   string
}

func Load() *Config {
    return &Config{
        Port:        getEnv("PORT", "8080"),
        DatabaseURL: getEnv("DATABASE_URL", "postgres://localhost/ecommerce"),
        LogLevel:    getEnv("LOG_LEVEL", "info"),
        JWTSecret:   getEnv("JWT_SECRET", "default-secret"),
    }
}

func getEnv(key, defaultValue string) string {
    if value := os.Getenv(key); value != "" {
        return value
    }
    return defaultValue
}
```

**internal/service/user.go:**

```go
package service

import (
    "errors"

    "github.com/yourusername/ecommerce/internal/repository"
    "github.com/yourusername/ecommerce/pkg/logger"
)

type User struct {
    ID    int    `json:"id"`
    Name  string `json:"name"`
    Email string `json:"email"`
}

type UserService struct {
    repo   repository.UserRepository
    logger logger.Logger
}

func NewUserService(repo repository.UserRepository, log logger.Logger) *UserService {
    return &UserService{
        repo:   repo,
        logger: log,
    }
}

func (s *UserService) CreateUser(user *User) error {
    if user.Name == "" {
        return errors.New("name is required")
    }

    if user.Email == "" {
        return errors.New("email is required")
    }

    s.logger.Info("Creating user", user.Name)
    return s.repo.Create(user)
}

func (s *UserService) GetUser(id int) (*User, error) {
    s.logger.Info("Getting user", id)
    return s.repo.GetByID(id)
}

func (s *UserService) ListUsers() ([]*User, error) {
    s.logger.Info("Listing all users")
    return s.repo.List()
}
```

## Internal Packages

The `internal` directory has special meaning in Go - packages in `internal` can only be imported by code in the same module.

### Internal Package Example

**internal/auth/jwt.go:**

```go
// Package auth provides authentication utilities.
// This package is internal and cannot be imported by external modules.
package auth

import (
    "errors"
    "time"

    "github.com/golang-jwt/jwt/v4"
)

type Claims struct {
    UserID int    `json:"user_id"`
    Email  string `json:"email"`
    jwt.RegisteredClaims
}

type JWTManager struct {
    secret []byte
}

func NewJWTManager(secret string) *JWTManager {
    return &JWTManager{
        secret: []byte(secret),
    }
}

func (j *JWTManager) GenerateToken(userID int, email string) (string, error) {
    claims := Claims{
        UserID: userID,
        Email:  email,
        RegisteredClaims: jwt.RegisteredClaims{
            ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
            IssuedAt:  jwt.NewNumericDate(time.Now()),
            Issuer:    "ecommerce-app",
        },
    }

    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
    return token.SignedString(j.secret)
}

func (j *JWTManager) ValidateToken(tokenString string) (*Claims, error) {
    token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, errors.New("invalid signing method")
        }
        return j.secret, nil
    })

    if err != nil {
        return nil, err
    }

    if claims, ok := token.Claims.(*Claims); ok && token.Valid {
        return claims, nil
    }

    return nil, errors.New("invalid token")
}
```

**internal/middleware/auth.go:**

```go
package middleware

import (
    "net/http"
    "strings"

    "github.com/yourusername/ecommerce/internal/auth"
)

func AuthMiddleware(jwtManager *auth.JWTManager) func(http.Handler) http.Handler {
    return func(next http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            authHeader := r.Header.Get("Authorization")
            if authHeader == "" {
                http.Error(w, "Authorization header required", http.StatusUnauthorized)
                return
            }

            tokenString := strings.TrimPrefix(authHeader, "Bearer ")
            if tokenString == authHeader {
                http.Error(w, "Bearer token required", http.StatusUnauthorized)
                return
            }

            claims, err := jwtManager.ValidateToken(tokenString)
            if err != nil {
                http.Error(w, "Invalid token", http.StatusUnauthorized)
                return
            }

            // Add user info to request context
            ctx := context.WithValue(r.Context(), "user_id", claims.UserID)
            ctx = context.WithValue(ctx, "email", claims.Email)
            r = r.WithContext(ctx)

            next.ServeHTTP(w, r)
        })
    }
}
```

## Documentation with `godoc`

### Writing Good Documentation

Go uses comments directly above declarations for documentation. The first line should be a complete sentence that starts with the name being declared.

**Example: Well-documented package**

```go
// Package calculator provides basic mathematical operations.
//
// This package implements common arithmetic functions with proper
// error handling and type safety.
//
// Example usage:
//
//     calc := calculator.New()
//     result, err := calc.Divide(10, 2)
//     if err != nil {
//         log.Fatal(err)
//     }
//     fmt.Printf("Result: %d\n", result)
package calculator

import (
    "errors"
    "fmt"
)

// Calculator represents a mathematical calculator.
// It maintains state for complex operations and provides
// a clean interface for arithmetic operations.
type Calculator struct {
    // precision controls the decimal precision for operations
    precision int
    // history stores the last 10 operations for debugging
    history []Operation
}

// Operation represents a single mathematical operation.
type Operation struct {
    Type     string  // The operation type (add, subtract, etc.)
    Operands []int   // The operands used in the operation
    Result   int     // The result of the operation
    Error    error   // Any error that occurred
}

// New creates a new Calculator with default precision.
//
// The calculator is initialized with precision set to 2 decimal places
// and an empty operation history.
func New() *Calculator {
    return &Calculator{
        precision: 2,
        history:   make([]Operation, 0, 10),
    }
}

// NewWithPrecision creates a new Calculator with specified precision.
//
// Parameters:
//   - precision: Number of decimal places for floating-point operations
//
// Returns a configured Calculator instance.
func NewWithPrecision(precision int) *Calculator {
    return &Calculator{
        precision: precision,
        history:   make([]Operation, 0, 10),
    }
}

// Add returns the sum of two integers.
//
// This method performs integer addition and records the operation
// in the calculator's history for debugging purposes.
//
// Example:
//     calc := New()
//     result := calc.Add(5, 3) // Returns 8
func (c *Calculator) Add(a, b int) int {
    result := a + b
    c.recordOperation("add", []int{a, b}, result, nil)
    return result
}

// Divide performs integer division with error handling.
//
// This method divides the first parameter by the second and returns
// both the result and any error that occurred. Division by zero
// returns an error.
//
// Parameters:
//   - dividend: The number to be divided
//   - divisor: The number to divide by
//
// Returns:
//   - int: The quotient of the division
//   - error: An error if division by zero is attempted
//
// Example:
//     calc := New()
//     result, err := calc.Divide(10, 2)
//     if err != nil {
//         log.Fatal(err)
//     }
//     fmt.Printf("10 / 2 = %d\n", result) // Prints: 10 / 2 = 5
func (c *Calculator) Divide(dividend, divisor int) (int, error) {
    if divisor == 0 {
        err := errors.New("division by zero")
        c.recordOperation("divide", []int{dividend, divisor}, 0, err)
        return 0, err
    }

    result := dividend / divisor
    c.recordOperation("divide", []int{dividend, divisor}, result, nil)
    return result, nil
}

// GetHistory returns the operation history.
//
// The history contains up to 10 of the most recent operations
// performed by this calculator instance. This is useful for
// debugging and auditing calculations.
//
// Returns a slice of Operation structs representing the history.
func (c *Calculator) GetHistory() []Operation {
    // Return a copy to prevent external modification
    history := make([]Operation, len(c.history))
    copy(history, c.history)
    return history
}

// recordOperation is a private method that adds an operation to history.
// It maintains a maximum of 10 operations in the history buffer.
func (c *Calculator) recordOperation(opType string, operands []int, result int, err error) {
    op := Operation{
        Type:     opType,
        Operands: operands,
        Result:   result,
        Error:    err,
    }

    // Add to history, maintaining max size of 10
    if len(c.history) >= 10 {
        c.history = c.history[1:] // Remove oldest
    }
    c.history = append(c.history, op)
}

// String returns a string representation of the calculator.
//
// This method implements the Stringer interface and provides
// a human-readable description of the calculator's current state.
func (c *Calculator) String() string {
    return fmt.Sprintf("Calculator{precision: %d, operations: %d}",
        c.precision, len(c.history))
}
```

### Using godoc

```bash
# Install godoc (if not already installed)
go install golang.org/x/tools/cmd/godoc@latest

# Run godoc server locally
godoc -http=:6060

# Then visit: http://localhost:6060/pkg/github.com/yourusername/yourproject/

# Generate documentation for a specific package
go doc github.com/yourusername/yourproject/calculator

# Show documentation for a specific function
go doc github.com/yourusername/yourproject/calculator.Add

# Show all exported items in a package
go doc -all github.com/yourusername/yourproject/calculator
```

### Documentation Best Practices

1. **Package-level documentation:** Always document your package
2. **Complete sentences:** Start with the name being documented
3. **Examples:** Include code examples in comments
4. **Error conditions:** Document when functions return errors
5. **Thread safety:** Document if functions are safe for concurrent use

**Example with examples in documentation:**

```go
// FormatCurrency formats a number as currency with the specified symbol.
//
// The function takes a float64 value and formats it with exactly 2 decimal
// places, thousands separators, and the provided currency symbol.
//
// Examples:
//     FormatCurrency(1234.56, "$")    // Returns: "$1,234.56"
//     FormatCurrency(1000000, "€")    // Returns: "€1,000,000.00"
//     FormatCurrency(0.5, "¥")        // Returns: "¥0.50"
//
// The function handles negative values by placing the minus sign before
// the currency symbol:
//     FormatCurrency(-123.45, "$")    // Returns: "-$123.45"
func FormatCurrency(amount float64, symbol string) string {
    // Implementation here...
}
```

This comprehensive guide covers Go packages and project structure from basic package creation to professional project organization and documentation. The key is to start simple with basic packages and gradually adopt more sophisticated organizational patterns as your projects grow in complexity.

Remember to run `go mod tidy` after organizing your packages and use `godoc` to ensure your documentation looks good. Well-organized Go projects with good documentation are much easier to maintain and contribute to.
