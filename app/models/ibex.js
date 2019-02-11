export default class Ibex {
  constructor(name, color, legs, img) {
    this.name = name
    this.color = color
    this.legs = legs
    this.img = img
  }
  walk(num) {
    if (num == this.legs) {
      console.log('quadruped')
    } else {
      console.log(`${this.name} has ${this.legs} legs`)
    }
  }
}