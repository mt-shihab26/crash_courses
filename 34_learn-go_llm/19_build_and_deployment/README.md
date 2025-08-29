## 🚀 19. Build & Deployment in Go

---

### 🔨 1. Basic Build Commands

- **`go build`**
  Compiles the packages but does **not** install the binary anywhere. Produces an executable in the current directory (or outputs to a file you specify).

    ```bash
    go build main.go
    # Produces: ./main (executable)
    ```

- **`go run`**
  Compiles and runs the Go program in one step. Good for quick testing, but doesn’t leave a binary behind.

    ```bash
    go run main.go
    ```

- **`go install`**
  Compiles and installs the binary to your `$GOPATH/bin` or `$GOBIN` directory, making it easy to run from anywhere.

    ```bash
    go install example.com/myapp@latest
    # Then run from anywhere as `myapp`
    ```

---

### 🌐 2. Cross-Compilation

Go makes it easy to compile binaries for other platforms and architectures.

Set two environment variables before running `go build`:

- `GOOS` — Target Operating System (e.g., `linux`, `windows`, `darwin` for macOS)
- `GOARCH` — Target architecture (`amd64`, `arm64`, `386`, etc.)

**Example: Build for Linux on an AMD64 CPU (from macOS or Windows):**

```bash
GOOS=linux GOARCH=amd64 go build -o myapp-linux
```

**Example: Build Windows executable:**

```bash
GOOS=windows GOARCH=amd64 go build -o myapp.exe
```

---

### 📦 3. Embedding Static Files (Go 1.16+)

Go 1.16 introduced the `embed` package, which lets you **embed files or directories directly into your Go binary** at compile time.

**How to embed:**

```go
package main

import (
	_ "embed"
	"fmt"
)

//go:embed hello.txt
var hello string

func main() {
	fmt.Println(hello)
}
```

- Place `hello.txt` next to your `main.go`.
- When you run or build your program, the contents of `hello.txt` are embedded into the variable `hello`.
- Supports embedding files, directories, and byte slices.

---

### ✅ Summary

| Command           | Purpose                                     |
| ----------------- | ------------------------------------------- |
| `go build`        | Compile source code to executable           |
| `go run`          | Compile and run program in one step         |
| `go install`      | Compile and install binary in `$GOPATH/bin` |
| `GOOS` & `GOARCH` | Cross-compile for different OS/arch         |
| `embed` package   | Embed static files into Go binaries         |

---
