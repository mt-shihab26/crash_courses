# Go Modules & Dependency Management

## Introduction to Go Modules (`go mod`)

Go modules are Go's dependency management system, introduced in Go 1.11. A module is a collection of related Go packages that are versioned together as a single unit.

### Creating a New Module

```bash
# Create a new directory for your project
mkdir myapp
cd myapp

# Initialize a new module
go mod init github.com/yourusername/myapp
```

This creates a `go.mod` file:

```go
module github.com/yourusername/myapp

go 1.21
```

### Basic Project Structure

```
myapp/
├── go.mod
├── go.sum (created automatically)
├── main.go
└── internal/
    └── utils/
        └── helper.go
```

### Example Application

**main.go:**

```go
package main

import (
    "fmt"
    "github.com/gin-gonic/gin"
    "github.com/yourusername/myapp/internal/utils"
)

func main() {
    fmt.Println("Starting application...")
    utils.PrintMessage("Hello from utils!")

    r := gin.Default()
    r.GET("/", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "Hello World!",
        })
    })
    r.Run(":8080")
}
```

**internal/utils/helper.go:**

```go
package utils

import "fmt"

func PrintMessage(msg string) {
    fmt.Println("Utils:", msg)
}
```

## `go get` Command

`go get` downloads and installs packages and their dependencies.

### Basic Usage

```bash
# Add a dependency
go get github.com/gin-gonic/gin

# Add a specific version
go get github.com/gin-gonic/gin@v1.9.1

# Add the latest version
go get github.com/gin-gonic/gin@latest

# Add a pre-release version
go get github.com/gin-gonic/gin@v1.10.0-beta.1

# Add from a specific commit
go get github.com/gin-gonic/gin@abc1234

# Add from a specific branch
go get github.com/gin-gonic/gin@master
```

### Upgrading Dependencies

```bash
# Upgrade a specific module
go get -u github.com/gin-gonic/gin

# Upgrade all dependencies
go get -u ./...

# Upgrade only patch versions
go get -u=patch ./...
```

### Removing Dependencies

```bash
# Remove a dependency
go mod tidy  # This removes unused dependencies

# Or manually edit go.mod and run:
go mod tidy
```

## `go install` Command

`go install` compiles and installs packages as executable binaries.

```bash
# Install a tool globally
go install github.com/air-verse/air@latest

# Install from current directory
go install .

# Install with specific version
go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.54.2

# Install to specific location
GOBIN=/usr/local/bin go install github.com/air-verse/air@latest
```

### Difference Between `go get` and `go install`

- **`go get`**: Downloads and adds dependencies to your module
- **`go install`**: Compiles and installs executables to `$GOPATH/bin` or `$GOBIN`

## Semantic Versioning

Go modules use semantic versioning (semver): `MAJOR.MINOR.PATCH`

### Version Format

```
v1.2.3
 │ │ │
 │ │ └── PATCH: Bug fixes (backward compatible)
 │ └──── MINOR: New features (backward compatible)
 └────── MAJOR: Breaking changes (not backward compatible)
```

### Version Examples in go.mod

```go
module github.com/yourusername/myapp

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/stretchr/testify v1.8.4
    golang.org/x/crypto v0.0.0-20230806145845-abc123def456 // indirect
)

replace github.com/old/package => github.com/new/package v1.0.0
```

### Version Constraints

```bash
# Exact version
go get github.com/gin-gonic/gin@v1.9.1

# Latest patch version of 1.9.x
go get github.com/gin-gonic/gin@v1.9

# Latest minor version of 1.x.x
go get github.com/gin-gonic/gin@v1

# Latest version
go get github.com/gin-gonic/gin@latest

# Specific commit
go get github.com/gin-gonic/gin@abc1234
```

## Vendoring

Vendoring copies all dependencies into your project's `vendor/` directory.

### Enable Vendoring

```bash
# Create vendor directory with all dependencies
go mod vendor

# Your project structure now looks like:
# myapp/
# ├── go.mod
# ├── go.sum
# ├── main.go
# └── vendor/
#     ├── github.com/
#     ├── golang.org/
#     └── modules.txt
```

### Using Vendored Dependencies

```bash
# Build using vendor directory
go build -mod=vendor

# Run tests using vendor directory
go test -mod=vendor ./...

# Set environment variable to always use vendor
export GOFLAGS="-mod=vendor"
```

### Vendor Directory Structure

```
vendor/
├── github.com/
│   └── gin-gonic/
│       └── gin/
├── golang.org/
│   └── x/
└── modules.txt  # Lists all vendored modules
```

## Common go.mod Commands

```bash
# Initialize module
go mod init [module-name]

# Add missing dependencies, remove unused ones
go mod tidy

# Copy dependencies to vendor/
go mod vendor

# Print module requirement graph
go mod graph

# Print available versions of a module
go list -m -versions github.com/gin-gonic/gin

# Show why a package is needed
go mod why github.com/gin-gonic/gin

# Download modules to local cache
go mod download

# Verify dependencies
go mod verify

# Edit go.mod file
go mod edit -require=github.com/gin-gonic/gin@v1.9.1
```

## Working Example: Building a Web API

Let's create a complete example:

**1. Initialize the project:**

```bash
mkdir todo-api
cd todo-api
go mod init github.com/yourusername/todo-api
```

**2. Add dependencies:**

```bash
go get github.com/gin-gonic/gin@v1.9.1
go get github.com/google/uuid@v1.3.0
```

**3. Create main.go:**

```go
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/google/uuid"
)

type Todo struct {
    ID    string `json:"id"`
    Title string `json:"title"`
    Done  bool   `json:"done"`
}

var todos []Todo

func main() {
    r := gin.Default()

    r.GET("/todos", getTodos)
    r.POST("/todos", createTodo)
    r.PUT("/todos/:id", updateTodo)

    r.Run(":8080")
}

func getTodos(c *gin.Context) {
    c.JSON(http.StatusOK, todos)
}

func createTodo(c *gin.Context) {
    var newTodo Todo
    if err := c.ShouldBindJSON(&newTodo); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    newTodo.ID = uuid.New().String()
    todos = append(todos, newTodo)
    c.JSON(http.StatusCreated, newTodo)
}

func updateTodo(c *gin.Context) {
    id := c.Param("id")

    for i, todo := range todos {
        if todo.ID == id {
            if err := c.ShouldBindJSON(&todos[i]); err != nil {
                c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
                return
            }
            todos[i].ID = id // Preserve ID
            c.JSON(http.StatusOK, todos[i])
            return
        }
    }

    c.JSON(http.StatusNotFound, gin.H{"error": "Todo not found"})
}
```

**4. Your go.mod will look like:**

```go
module github.com/yourusername/todo-api

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/google/uuid v1.3.0
)

require (
    github.com/bytedance/sonic v1.9.1 // indirect
    github.com/chenzhuoyu/base64x v0.0.0-20221115062448-fe3a3abad311 // indirect
    // ... other indirect dependencies
)
```

**5. Build and run:**

```bash
go mod tidy
go run main.go
```

## Best Practices

### 1. Use Semantic Import Versioning

```go
// For major version 2+, include version in import path
import "github.com/example/package/v2"
```

### 2. Pin Important Dependencies

```bash
# Pin to specific version for stability
go get github.com/critical/package@v1.2.3
```

### 3. Regular Maintenance

```bash
# Check for updates regularly
go list -u -m all

# Update dependencies
go get -u ./...
go mod tidy
```

### 4. Use Replace for Development

```go
// In go.mod for local development
replace github.com/yourorg/package => ../local-package
```

### 5. Vendor for Production

```bash
# Create vendor directory for reliable builds
go mod vendor

# Add to .gitignore if using proxy
echo "vendor/" >> .gitignore
```

This covers the essential aspects of Go modules and dependency management. The key is understanding how `go mod` manages dependencies, using semantic versioning properly, and knowing when to use vendoring for your deployment strategy.
