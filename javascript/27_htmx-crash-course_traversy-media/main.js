import express from "express"

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}))
// Parse JSON bodies (as sent by API clients)
app.use(express.json())

app.use("/users", async (req, res) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json(); 
    return res.send(`
        <h2 class="text-2xl font-bold my-4">Users</h2> 
        <ul>
            ${users.map(user =>`<li>${user.name}</li>`).join("")} 
        </ul>
    `)
})

app.listen(8000, () => {
    console.log("Listening on http://127.0.0.1:8000")
});