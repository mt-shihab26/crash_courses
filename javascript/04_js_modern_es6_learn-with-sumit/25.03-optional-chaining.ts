const language = {
    name: "JavaScript",
    creator: "Brendan Eich",
    library: {
        react: {
            company: "Facebook"
        }
    }
}

const company = language?.library?.react?.company;
console.log(company);

const colors = ["red", "green", "blue"];
console.log(colors?.[0]);