import { IsPlayer } from "../interfaces/IsPlayer.js"

export class Player3 implements IsPlayer {
    public name: string;
    public age: number;
    readonly country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    play(): string {
        return `${this.name} from ${this.country} is playing`;
    }
}

class FootballPlayer implements IsPlayer {
    public name: string;
    public age: number;
    readonly country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    play(): string {
        return `${this.name} from ${this.country} is playing football`;
    }
}

let sakib: IsPlayer;
let massi: IsPlayer;

sakib = new Player3("Sakib", 35, "Bangladesh");
massi = new FootballPlayer("Massi", 34, "Argentina");

console.log(sakib, massi);