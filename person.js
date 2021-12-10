console.log('*********');
console.log(__dirname, __filename);
console.log('*********');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  gretting() {
    console.log(`Hello i'm ${this.name} i've ${this.age} years old !`);
  }
}

module.exports = Person;
