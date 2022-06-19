type Instructions = "N" | "S" | "O" | "E" | "R" | "L" | "F"
type Instruction = {
  instruction: Instructions
  units: number
}

export class Calculator {
  x = 0
  y = 0
  direction = 270 // default: est

  moveNorth(units: number): void {
    this.y += units
  }

  moveSouth(units: number): void {
    this.y -= units
  }

  moveEast(units: number): void {
    this.x += units
  }

  moveOvest(units: number): void {
    this.x -= units
  }

  turnRight(degree: number): void {
    this.direction = this.mod(this.direction + degree)
  }

  turnLeft(degree: number): void {
    this.direction = this.mod(this.direction - degree)
  }

  private mod(n: number): number {
    // fix js negative module.
    return ((n % 360) + 360) % 360
  }

  moveForward(units: number): void {
    this.x += units * Math.sin((this.direction * Math.PI) / 180)
    this.y += units * Math.cos((this.direction * Math.PI) / 180)
  }

  splitInstruction(instruction: string): Instruction {
    return {
      instruction: instruction.substring(0, 1) as Instructions,
      units: parseInt(instruction.substring(1)),
    }
  }

  handleInstruction(instruction: string): void {
    const splitted: Instruction = this.splitInstruction(instruction)

    switch (splitted.instruction) {
      case "N":
        this.moveNorth(splitted.units)
        break
      case "S":
        this.moveSouth(splitted.units)
        break
      case "O":
        this.moveOvest(splitted.units)
        break
      case "E":
        this.moveEast(splitted.units)
        break
      case "L":
        this.turnLeft(splitted.units)
        break
      case "R":
        this.turnRight(splitted.units)
        break
      case "F":
        this.moveForward(splitted.units)
        break
    }
  }

  handleInstructions(instructions: string[]): void {
    instructions.forEach((instruction: string) => this.handleInstruction(instruction))
  }

  getManhattan(): number {
    return Math.abs(this.x) + Math.abs(this.y)
  }
}
