
//syntax error

// const a
// console.log(a)

// var person = {
//   name: 'sachin',
//   age = 40
// }

//reference error

// function test() {
//   var x = 100
// }
// test()
// console.log(x)

// type error

// var x = [10]

// x.push(20)
// console.log(x)

var person = {
  name: 'sachin',
  age: 40
}


for (var value of person) {
  console.log(value)
}