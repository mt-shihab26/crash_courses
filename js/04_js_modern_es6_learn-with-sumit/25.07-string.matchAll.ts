const text = "My favorite colors are #FFFFFF and #000000";
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2})(?<group3>[\da-fA-F]{2})/g;

const matchesAll = text.matchAll(regex);
for (let match of matchesAll) {
    console.log(match);
}