const player1 = "Sakib";
const player2 = "Tamim";

const modifier = (strings, ...values) =>
    strings.reduce((pre, current) =>
        pre += current + (values.length ? "Mr. " + values.shift() : ""), "")

const res = modifier`We have ${player1} and ${player2} in our cricket team.`;
console.log(res);