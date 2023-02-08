import { add, pi } from "./calc.js"; // named export
import * as calc from "./calc.js";
import dcalc from "./calc.js";


console.log(add(23, 55), pi);
console.log(calc.add(23, 55), calc.pi);
dcalc();
