import express from "express";
import fs from "node:fs/promises";
import path from "node:path";

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const listFilesRecursively = async dir => {
    let fileList = [];
    const traverse = async directory => {
        const files = await fs.readdir(directory);
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) {
                await traverse(filePath);
            } else {
                fileList.push(filePath.replace("public", ""));
            }
        }
    };
    await traverse(dir);
    return fileList;
};

app.get("/", async (req, res) => {
    const directoryPath = "public";
    const files = await listFilesRecursively(directoryPath);
    res.send(`
        <ul>
            ${files.map(file => `<li><a href="${file}">${file}</a></li>`).join("")}
        </ul>
    `);
});

app.use("/users", async (req, res) => {
    const limit = Number(req.query.limit || 10);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`);
    const users = await response.json();
    setTimeout(() => {
        res.send(`
<h2 class="text-2xl font-bold my-4">Users</h2> 
<ul>
    ${users.map(user => `<li>${user.name}</li>`).join("")} 
</ul>
        `);
    }, 1000);
});

app.post("/temperature-convert", async (req, res) => {
    const fahrenheit = parseFloat(req.body["fahrenheit"]);
    const celsius = (fahrenheit - 32) * (5 / 9);
    setTimeout(() => {
        res.send(`
<p>${fahrenheit} fahrenheit = ${celsius} Celsius</p> 
        `);
    }, 1000);
});

let counter = 0;

app.get("/poll", async (req, res) => {
    counter++;
    return res.send(`
<p class="text-2xl">Count: ${counter}</p>
    `);
});

app.get("/temperatures", async (req, res) => {
    const temperature = 20 + Math.random() * 2 - 1;
    return res.send(`
<p class="text-2xl">Current Temperature: ${temperature.toFixed(1)} °C</p>
    `);
});

const contacts = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Doe", email: "jane@example.com" },
    { name: "Alice Smith", email: "alice@example.com" },
    { name: "Bob Williams", email: "bob@example.com" },
    { name: "Mary Harris", email: "mary@example.com" },
    { name: "David Mitchell", email: "david@example.com" },
];

app.post("/search", (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

    if (!searchTerm) {
        return res.send("<tr></tr>");
    }

    const searchResults = contacts.filter(contact => {
        const name = contact.name.toLowerCase();
        const email = contact.email.toLowerCase();

        return name.includes(searchTerm) || email.includes(searchTerm);
    });

    setTimeout(() => {
        const searchResultHtml = searchResults
            .map(
                contact => `
<tr>
    <td><div class="my-4 p-2">${contact.name}</div></td>
    <td><div class="my-4 p-2">${contact.email}</div></td>
</tr>
      `
            )
            .join("");

        res.send(searchResultHtml);
    }, 1000);
});

app.post("/search2", async (req, res) => {
    const searchTerm = req.body.search.toLowerCase();

    if (!searchTerm) {
        return res.send("<tr></tr>");
    }

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const contacts = await response.json();

    const searchResults = contacts.filter(contact => {
        const name = contact.name.toLowerCase();
        const email = contact.email.toLowerCase();

        return name.includes(searchTerm) || email.includes(searchTerm);
    });

    setTimeout(() => {
        const searchResultHtml = searchResults
            .map(
                contact => `
        <tr>
          <td><div class="my-4 p-2">${contact.name}</div></td>
          <td><div class="my-4 p-2">${contact.email}</div></td>
        </tr>
      `
            )
            .join("");

        res.send(searchResultHtml);
    }, 1000);
});

app.post("/contact/email", async (req, res) => {
    const email = req.body["email"];
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    const valid = {
        message: "That email is valid",
        class: "text-green-700",
    };
    const invalid = {
        message: "Please enter a valid email address",
        class: "text-red-700",
    };

    const isValid = emailRegex.test(email);
    const className = isValid ? valid.class : invalid.class;
    const message = isValid ? valid.message : invalid.message;

    return res.send(`
            <div class="mb-4" hx-target="this" hx-swap="outerHTML">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
                    >Email Address</label
                >
                <input
                    hx-post="/contact/email"
                    name="email"
                    class="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    value="${email}"
                    required
                />
                <div class="${className}">${message}</div>
            </div> 
        `);
});

app.listen(8000, () => {
    console.log("Listening on http://127.0.0.1:8000");
});
