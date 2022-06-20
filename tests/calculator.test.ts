import {Calculator} from "../src/calculator"

describe('calculator', () => {
  
  it('should correctly move north', () => {
    const c: Calculator = new Calculator()
    c.moveNorth(12)
    expect(c.y).toBe(12)
    expect(c.x).toBe(0)
  })
  
  it('should correctly move south', () => {
    const c: Calculator = new Calculator()
    c.moveSouth(11)
    expect(c.y).toBe(-11)
    expect(c.x).toBe(0)
  })
  
  it('should correctly move east', () => {
    const c: Calculator = new Calculator()
    c.moveEast(10)
    expect(c.y).toBe(0)
    expect(c.x).toBe(10)
  })
  
  it('should correctly move ovest', () => {
    const c: Calculator = new Calculator()
    c.moveOvest(9)
    expect(c.y).toBe(0)
    expect(c.x).toBe(-9)
  })
  
  it('should correctly turn right', () => {
    const c: Calculator = new Calculator()
    c.direction = 0
    c.turnRight(90)
    expect(c.direction).toBe(90)
  })
  
  it('should correctly turn right for anglese > 360', () => {
    const c: Calculator = new Calculator()
    c.direction = 270
    c.turnRight(180)
    expect(c.direction).toBe(90)
  })
  
  it('should correctly turn left', () => {
    const c: Calculator = new Calculator()
    c.direction = 270
    c.turnLeft(90)
    expect(c.direction).toBe(180)
  })
  
  it('should correctly turn left for anglese < 0', () => {
    const c: Calculator = new Calculator()
    c.direction = 90
    c.turnLeft(180)
    expect(c.direction).toBe(270)
  })
  
  it('should correctly move forward on different angles', () => {
    const c: Calculator = new Calculator()
    const cases = [
        [0, 10, 0, 10],
        [84, 10, 9.95, 1.05],
        [270, 10, -10, -0],
        [180, 10, 0, -10]
    ];
    cases.forEach(([direction, units, x, y]) => {
        c.x = 0
        c.y = 0
        c.direction = direction
        c.moveForward(units);

        expect(Math.round(c.x*100)/100).toBe(x)
        expect(Math.round(c.y*100)/100).toBe(y)
    })
  })


})
