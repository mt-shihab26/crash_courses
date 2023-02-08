class Player {
    private name: string;
    protected age: number
    readonly country: string

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    paly(): string {
        return `${this.name} from ${this.country} is playing`;
    }
}

const mashrafi = new Player("Mashrafi", 38, "Bangladesh");
const sakib = new Player("Sakib", 35, "Bangladesh");

const players: Player[] = [];
players.push(mashrafi);
players.push(sakib);

console.log(players);


// mashrafi.name = "Something else";
console.log(mashrafi.country);
// mashrafi.country = "England"


class Player2 {
    constructor(
        private name: string,
        protected age: number,
        readonly country: string
    ) { }

    paly(): string {
        return `${this.name} from ${this.country} is playing`;
    }
}