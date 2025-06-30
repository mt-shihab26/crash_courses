const players = [
    { name: "Sakib", avg: 38.23 },
    { name: "Tamim", avg: 36.74 },
    { name: "Mushfiq", avg: 36.78 },
    { name: "Mahmudullah", avg: 37.12 }
]

const result = players.filter(player => player.avg >= 37);

console.log(result);
