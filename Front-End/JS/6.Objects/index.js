
//object literal way

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person1)

// var person2 = {
//   name: 'dhoni',
//   age: 37,
//   city: 'ranchi',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person2)

// var person3 = {
//   name: 'kohli',
//   age: 35,
//   city: 'delhi',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person3)


//constructor function way (ES-5)

// function Test(name, age, city) {
//   this.name = name;
//   this.age = age;
//   this.city = city;
//   this.play = function () {
//     console.log('play')
//   }
    
// }

// var person1 = new Test('sachin', 40, 'mumbai')
// var person2 = new Test('dhoni', 38, 'ranchi')
// var person3 = new Test('kohli', 35, 'delhi')

// console.log(person1)
// console.log(person2)
// console.log(person3)

//classical way

class Test{
   
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.play = function () {
      console.log('play')
    }
  }
}
var person1 = new Test('sachin', 40, 'mumbai')
var person2 = new Test('dhoni', 38, 'ranchi')
var person3 = new Test('kohli', 35, 'delhi')
console.log(person1)
console.log(person2)
console.log(person3)
// console.log(typeof Test)
