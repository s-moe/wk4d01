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
