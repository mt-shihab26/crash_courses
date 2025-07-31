## 🧹 18. Formatting & Linting in Go

Go emphasizes **standardized code style**. Formatting and linting are baked into the ecosystem and used in almost every Go project.

---

### 🔧 1. `gofmt` — The Built-in Formatter

- Automatically formats Go code according to **standard style**.
- Removes unnecessary spaces, aligns code, etc.
- Enforces consistency across all Go projects.

**Usage:**

```bash
gofmt -w main.go
```

- `-w`: writes the changes back to the file.
- Run it on files, directories, or entire projects.

---

### 🔄 2. `goimports` — Like `gofmt`, but smarter

- Formats code **and** automatically **adds/removes import statements**.
- Reorders imports: stdlib, third-party, then local packages.

**Install:**

```bash
go install golang.org/x/tools/cmd/goimports@latest
```

**Usage:**

```bash
goimports -w main.go
```

**Tip:** Many Go developers use `goimports` instead of `gofmt`.

---

### ✅ 3. `golint` — Code Style Suggestions

- Provides **style suggestions**, like comments for exported functions.
- Does **not** catch bugs — only style issues.

**Install:**

```bash
go install golang.org/x/lint/golint@latest
```

**Usage:**

```bash
golint main.go
```

Example warning:

```
exported function DoSomething should have comment or be unexported
```

> Note: `golint` is not actively maintained. Use `staticcheck` for modern projects.

---

### 🧠 4. `staticcheck` — Smarter, modern linter

- Think of it as a **super-powered golint + bug checker**.
- Catches:
    - Redundant code
    - Performance issues
    - Bugs
    - Best practices

**Install:**

```bash
go install honnef.co/go/tools/cmd/staticcheck@latest
```

**Usage:**

```bash
staticcheck ./...
```

---

### 🔍 5. `go vet` — Built-in Bug Detector

- Analyzes code for **suspicious patterns**, like:
    - Format string mismatches
    - Misused struct tags
    - Incorrect method calls

**Usage:**

```bash
go vet ./...
```

This runs quickly and should be **part of your CI pipeline**.

---

### 🧰 6. `golangci-lint` — All-in-One Linter Tool

- Combines multiple linters into one tool:
    - `go vet`, `staticcheck`, `ineffassign`, `gosec`, etc.

- Highly customizable.
- Fast and parallelized.

**Install:**

```bash
go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
```

**Usage:**

```bash
golangci-lint run
```

**Example config (`.golangci.yml`):**

```yaml
linters:
    enable:
        - govet
        - staticcheck
        - errcheck
        - gofmt
```

---

### 🧑‍💻 Recommended Workflow

| Task               | Tool                     |
| ------------------ | ------------------------ |
| Format code        | `goimports -w .`         |
| Style suggestions  | `golint` / `staticcheck` |
| Catch bugs         | `go vet`                 |
| Full linting suite | `golangci-lint run`      |

---

### ✅ Summary

| Tool            | Purpose                         | Built-in? | Modern?         |
| --------------- | ------------------------------- | --------- | --------------- |
| `gofmt`         | Code formatting                 | ✅        | ✅              |
| `goimports`     | Format + fix imports            | ❌        | ✅              |
| `golint`        | Style suggestions               | ❌        | 🚫 (deprecated) |
| `staticcheck`   | Advanced linting & bugs         | ❌        | ✅              |
| `go vet`        | Bug checker                     | ✅        | ✅              |
| `golangci-lint` | Aggregated linter (CI-friendly) | ❌        | ✅              |

---
