const mysql = require("mysql2/promise");

const connect = async () => {
    try {
        const con = await mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "password",
            database: "test",
        });

        // const resultInsert = await con.query(
        //     "INSERT INTO employees (name, ssn) VALUES (?, ?)",
        //     ["Britney", "999"]
        // );
        // console.log(resultInsert);

        // const resultDelete = await con.query(
        //     "DELETE FROM employees WHERE ssn = ? ",
        //     ["999"]
        // );
        // console.log(resultDelete);

        await con.beginTransaction();

        const resultUpdate = await con.query(
            "UPDATE employees SET name = ? WHERE name = ?",
            ["Shihab", "Shihab Mahamud"]
        );
        console.log(resultUpdate);

        const [row1, schema1] = await con.query("SELECT * FROM employees");
        console.table(row1);

        await con.commit();

        // const name = "Shihab Mahamud";
        // const [row2, schema2] = await con.query(
        //     "SELECT * FROM employees WHERE name = ?",
        //     [name]
        // );
        // console.table(row2);
    } catch (error) {
        console.error(error);
    }
};

connect();
