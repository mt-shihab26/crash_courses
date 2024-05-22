// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

const sportsUl = document.querySelector("#sports");

sportsUl.addEventListener("click", e => {
    const tmp = e.target.innerText.split(" ");
    if (tmp.length > 1)
        e.target.innerText = tmp[0];
    else
        e.target.innerText += " is clicked"
});

const newSport = document.createElement("li");
newSport.innerText = "Rugby";
sportsUl.append(newSport);
