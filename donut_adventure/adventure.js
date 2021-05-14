// Inside the w4d01folder that you created, create another folder called donut_adventure
// Navigate inside the donut_adventurefolder and create an index.htmland adventure.jsfile.
// Connect the files and for the rest of this homework, work in the adventure.jsfile. Confirm that you've successfully connected your files by console logging something and checking your browser developer tools console!
class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      sprinkleSpray: 5,
      sugarShock:10,
    }
    this.catchphrases = [
      'i\'m fresher than day old pizza',
      'you can\'t count my calories'
      ]
  }
    talkSass() {
    // return this.catchphrases[0]
      return this.catchphrases[Math.floor(Math.random()*this.catchphrases.length)];
    }
    announceHealth(){
      console.log(this.health)
    }
    fight(enemy){
      console.log (this.weapons.sprinkleSpray);
      let newHealth = enemy.health -= this.weapons.sprinkleSpray;
      return `${enemy.name} has a new health of ${newHealth}`
    }
}
const Dougie = new Hero('Dougie')

class Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    }
    this.catchphrases = [
      'i\'m youtube famous',
      'i\'m more dangerous than an uncovered sewer']
  }
    talkSmack(){
      return this.catchphrases[Math.floor(Math.random()*this.catchphrases.length)];
    }
    announceHealth(){
      console.log(this.health)
    }
    fight(enemy){
      console.log (this.weapons.cheeseGrease);
      let newHealth = enemy.health -= this.weapons.cheeseGrease;
      return `${enemy.name} has a new health of ${newHealth}`
    }
}

const PizzaRat = new Enemy('Pizza Rat')

//1.
Dougie.talkSass()

//2.
PizzaRat.talkSmack()

//3.
Dougie.announceHealth()

//4.
PizzaRat.announceHealth()
