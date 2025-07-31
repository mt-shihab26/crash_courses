## 📁 20. Code Organization & Best Practices in Go

---

### ✅ 1. Idiomatic Go (Effective Go)

- Follow **Effective Go** guidelines: [https://golang.org/doc/effective_go.html](https://golang.org/doc/effective_go.html)
- Use Go's **naming conventions**:
    - Exported names start with uppercase (`MyFunc`, `MyStruct`), unexported start lowercase.
    - Use concise, clear names — prefer short names like `err`, `r`, `req` where obvious.

- Organize packages by **responsibility** — small, focused packages.
- Write clear comments on **exported** functions/types only.
- Use `gofmt` to keep consistent formatting.

---

### 🔄 2. Composition Over Inheritance

- Go **does not have inheritance** like traditional OOP languages.
- Instead, it uses **composition** — embedding structs or interfaces.

Example:

```go
type Logger struct {
    Prefix string
}

func (l Logger) Log(msg string) {
    fmt.Println(l.Prefix, msg)
}

type Server struct {
    Logger // embed Logger, Server “has a” Logger
}

func main() {
    s := Server{Logger{"[INFO]"}}
    s.Log("Server started")  // uses Logger's method
}
```

This keeps code flexible and avoids complex inheritance trees.

---

### 🔎 3. Minimal Interfaces

- Define interfaces with **only the methods you actually need**.
- Small interfaces lead to easier testing and decoupling.

Example:

```go
type Reader interface {
    Read(p []byte) (n int, err error)
}
```

- Avoid large “kitchen sink” interfaces.
- Prefer using interfaces as **parameters** to functions, not just as return types.

---

### 🚫 4. Avoiding Global Variables

- Global variables can cause:
    - Hard-to-track bugs (shared mutable state)
    - Problems in concurrent programs

- Prefer **passing dependencies explicitly** (dependency injection).
- Use package-level variables only for constants or immutable data.

Example — better:

```go
type Config struct {
    DBConn string
}

func Run(cfg Config) {
    // use cfg.DBConn instead of a global variable
}
```

---

### 🛠 5. Handling Panics and Recover

- Avoid panics for **normal error handling** — use error returns.
- Panics are for **truly unexpected** issues (e.g., programmer errors).
- Use `recover()` inside a deferred function to **catch and handle panics** gracefully.

Example:

```go
func safeCall() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    // Code that might panic
    panic("something bad happened")
}

func main() {
    safeCall()
    fmt.Println("Program continues running")
}
```

---

### 📋 Summary Table

| Practice                     | Why?                                | How?                              |
| ---------------------------- | ----------------------------------- | --------------------------------- |
| Idiomatic Go                 | Consistency & readability           | Follow Effective Go & conventions |
| Composition over inheritance | More flexible, less complex         | Embed structs/interfaces          |
| Minimal interfaces           | Easier to implement & test          | Define small, focused interfaces  |
| Avoid global variables       | Reduce bugs and hidden dependencies | Pass dependencies explicitly      |
| Handle panics with recover   | Graceful error recovery             | Use `defer` + `recover()`         |

---
