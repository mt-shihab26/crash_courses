package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "modernc.org/sqlite" // Import SQLite driver
)

func main() {
	// 1. Open the SQLite database file (creates it if not exists)
	db, err := sql.Open("sqlite", "example.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 2. Create a table
	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
		age INTEGER
	)`)
	if err != nil {
		log.Fatal("Create table error:", err)
	}

	// 3. Use a prepared statement to insert data
	stmt, err := db.Prepare("INSERT INTO users(name, age) VALUES(?, ?)")
	if err != nil {
		log.Fatal("Prepare error:", err)
	}
	defer stmt.Close()

	_, err = stmt.Exec("Alice", 30)
	_, err = stmt.Exec("Bob", 25)

	// 4. Use a transaction
	tx, err := db.Begin()
	if err != nil {
		log.Fatal("Transaction begin error:", err)
	}

	_, err = tx.Exec("INSERT INTO users(name, age) VALUES(?, ?)", "Carol", 28)
	if err != nil {
		tx.Rollback()
		log.Fatal("Transaction insert error:", err)
	}
	tx.Commit()

	// 5. Query data
	rows, err := db.Query("SELECT id, name, age FROM users")
	if err != nil {
		log.Fatal("Query error:", err)
	}
	defer rows.Close()

	fmt.Println("Users:")
	for rows.Next() {
		var id, age int
		var name string
		err := rows.Scan(&id, &name, &age)
		if err != nil {
			log.Fatal("Row scan error:", err)
		}
		fmt.Printf("- ID: %d, Name: %s, Age: %d\n", id, name, age)
	}
}
