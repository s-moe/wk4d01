class Hamster {
  constructor(name) {
    this.owner = '';
    this.name = name;
    this.price = 15;
  }
  wheelRun() {
    console.log('sqeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price;
  }
}
class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log (`Hello ${this.name}`);
  }
  eat(num) {
    for (let i = 0; i< num; i++){
      this.weight++;
      this.mood++;
    }
  }
  exercise(num) {
    for (let i = 0; i < num; i++){
      this.weight--
    }
  }
  ageUp(num) {
    for (let i=0; i< num; i++){
      this.age++;
      this.height++;
      this.weight++;
      this.mood++;
      this.bankAccount+=10;
    }
  }
  buyHamster(hamster){
    this.hamsters.push(hamster)
    this.mood+=10;
    this.bankAccount -= hamster.getPrice()
  }
}
//1.
const Timmy = new Person ('Timmy')
//. 2
Timmy.ageUp(5)

//3.
Timmy.eat(5)

//4.
Timmy.exercise(5)

//5.
Timmy.ageUp(9)

//6.

const Gus = new Hamster('Gus') // argument

//7.
Gus.owner = 'Timmy'

//8.

Timmy.buyHamster(Gus)

//9.
Timmy.ageUp(15)

//10.
Timmy.eat(2)

//11.
Timmy.exercise(2)
//
//
