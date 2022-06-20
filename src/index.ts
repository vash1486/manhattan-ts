import { Calculator } from "./calculator"
import {readFileSync} from "fs"

const fileName: string = process.argv[2] ?? './instructions'
const instructions: string = readFileSync(fileName).toString()

const c: Calculator = new Calculator();
c.handleInstructions(instructions.split(/\n/));

console.log(`Current Manhattan is ${c.getManhattan()}`)
