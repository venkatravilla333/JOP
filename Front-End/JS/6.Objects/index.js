
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
//   };
    
// }

// var person1 = new Test('sachin', 40, 'mumbai')
// var person2 = new Test('dhoni', 38, 'ranchi')
// var person3 = new Test('kohli', 35, 'delhi')

// console.log(person1)
// console.log(person2)
// console.log(person3)

//classical way

// class Test{
   
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.play = function () {
//       console.log('play')
//     }
//   }
// }
// var person1 = new Test('sachin', 40, 'mumbai')
// var person2 = new Test('dhoni', 38, 'ranchi')
// var person3 = new Test('kohli', 35, 'delhi')
// console.log(person1)
// console.log(person2)
// console.log(person3)
// // console.log(typeof Test)

//objects are dynamic

// var person = {
//   name: 'sachin',
//   play: function () {
//     console.log('play')
//   }
// }
// console.log(person)

// console.log(person['name'])
// person.play()

// //add

// person.age = 40

// //update
// person.name = 'kohli'

// //delete

// delete person.name
// delete person.play
// console.log(person)


//loop

// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: function () {
//     console.log('play')
//   }
// }

// console.log(person)

// for in

// for (var key in person) {
//   console.log(key, person[key])
// }

// var keys = Object.keys(person)
// console.log(keys)

// var values = Object.values(person)
// console.log(values)

// var entries = Object.entries(person)
// console.log(entries)

// Math object

// console.log(Math)

// console.log(Math.min(2, 8, 3))
// console.log(Math.max(2, 8, 3))
// console.log(Math.floor(10.9))
// console.log(Math.floor(10.1))
// console.log(Math.ceil(10.1))
// console.log(Math.round(10.4))
// console.log(Math.round(10.5))
// console.log(Math.round(10.9))
// console.log(Math.random()*100)
// console.log(Math.pow(2, 5))
// console.log(Math.sqrt(25))

//copy

//primitives

// var a = 10

// var b = a

// console.log(a)
// console.log(b)
// b = 20
// console.log(a)
// console.log(b)


//reference
// import lodash from 'lodash'
// var lodash = require('lodash')

var originalObj = {
  name: 'sachin',
  address: { road: 101 },
  play: () => {
    console.log('play')
  }
}


// var copiedObj = originalObj //normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy
// var copiedObj = Object.assign({}, originalObj)//shallow copy (ES-5)
// var copiedObj = {...originalObj} //shallow copy (ES-6)

copiedObj.name = 'kohli'
copiedObj.address.road = 201

console.log(originalObj)
console.log(copiedObj)











