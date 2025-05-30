
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

// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: () => {
//     console.log('play')
//   }
// }


// var copiedObj = originalObj //normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) //deep copy
// var copiedObj = lodash.cloneDeep(originalObj) //deep copy
// var copiedObj = Object.assign({}, originalObj)//shallow copy (ES-5)
// var copiedObj = {...originalObj} //shallow copy (ES-6)

// copiedObj.name = 'kohli'
// copiedObj.address.road = 201

// console.log(originalObj)
// console.log(copiedObj)

//date object

// var current = new Date()
// console.log(current)

// console.log(current.getFullYear())
// console.log(current.getMonth())
// console.log(current.getDay())
// console.log(current.getHours())
// console.log(current.getMinutes())
// console.log(current.getSeconds())

// current.setFullYear(2045)
// current.setMonth(11)
// current.setDate(31)
// current.setHours(12)
// console.log(current)


// var date1 = new Date(2050, 7, 10, 2, 20, 30)
// console.log(date1)

// console.log(date1.getFullYear())
// console.log(date1.getMonth())
// console.log(date1.getDay())
// console.log(date1.getHours())
// console.log(date1.getMinutes())
// console.log(date1.getSeconds())

// date1.setFullYear(2045)
// date1.setMonth(11)
// date1.setDate(31)
// date1.setHours(12)
// console.log(date1)

// var date2 = new Date("nov 2040 10 10:10:10")
// console.log(date2)



//template string (ES-6)

// var name = 'sachin'
// var age = 40

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age)
// console.log(`Hi this is ${name} my age is ${age}`)


// var str = ' Hi how are you '
var str = 'Hi you how are you'
// console.log(str)
// console.log(str.length)

// console.log(str.trimStart().length)
// console.log(str.trimEnd().length)
// console.log(str.trim().length)

// var copy = str.slice()
// var copy = str.slice(0)
// var copy = str.slice(0, 2)
// var copy = str.slice(-2)
// console.log(copy)
// var copy = str.substring()
// var copy = str.substring(0)
// var copy = str.substring(0, 2)
// var copy = str.substring(-2)
// console.log(copy)

// var char = str.charAt(1)
// var code = str.charCodeAt(0)
// console.log(char)
// console.log(code)

// var newStr = str.concat(' sachin')
// console.log(newStr)

// var arrStr = str.split()
// var arrStr = str.split('')
// var arrStr = str.split(' ')
// console.log(arrStr)

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str.replace('you', 'me'))

// padding

// var str = 'hi'

// console.log(str.padStart(4, 100))
// console.log(str.padEnd(4, 3))

// console.log(str.indexOf('you'))
// console.log(str.lastIndexOf('you'))
// console.log(str.indexOf('bye'))
// console.log(str.lastIndexOf('bye'))
// console.log(str.includes('you'))
// console.log(str.includes('bye'))
// console.log(str.startsWith('Hi'))
// console.log(str.startsWith('bye'))
// console.log(str.endsWith('hi'))
// console.log(str.endsWith('you'))












