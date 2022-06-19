import { Calculator } from "./lib/calculator"
import {readFileSync} from "fs"

const instructions: string = readFileSync('./instructions').toString()

const c: Calculator = new Calculator();
c.handleInstructions(instructions.split(/\n/));

console.log(`Current Manhattan is ${c.getManhattan()}`)
