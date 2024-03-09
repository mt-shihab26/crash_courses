const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#new-quote-button");
const body = document.querySelector("body");

const quotes = [{
    content: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison"
}, {
    content: "You can observe a lot just by watching.",
    author: "Yogi Berra"
}, {
    content: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln"
}, {
    content: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe"
}, {
    content: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer"
}, {
    content: "Be the chief but never the lord.",
    author: "Lao Tzu"
}, {
    content: "Nothing happens unless first we dream.",
    author: "Carl Sandburg"
}, {
    content: "Well begun is half done.",
    author: "Aristotle"
}];

const random = (start, end) => (Math.ceil((Math.random() * end) + start)) % end;

const quoteHandler = e => {
    const index = random(0, quotes.length - 1);
    quote.innerText = quotes[index].content;
    author.innerText = quotes[index].author;
};

window.addEventListener('load', quoteHandler);
button.addEventListener("click", quoteHandler);