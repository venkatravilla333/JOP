
// function test() {
//   var a = 1
// }
// test()

// var x = function hello() {
//   var a = 10
// }
// x()

// var y = function () {
//   var a = 100
// }
// y()

// var z =  ()=> {
//   var a = 1000
// }
// z()

//params vs arguments

// function test(a, b) {
//   var c = 3
//   console.log(a)
//   console.log(b)
// }
// test(1, 2)

//default param (ES-6)

// function test(a=10, b) {
//   console.log(a)
//   console.log(b)
// }
// test()

// function test(a=undefined, b) {
//   console.log(a)
//   console.log(b)
// }
// test(null, 2)


// varying no params vs arguments

// function test(a, b, c) {
//   // console.log(a)
//   // console.log(b)
//   // console.log(c)
//   // var sum = a + b + c
//   // console.log(sum, typeof sum)
//   // console.log(arguments)
//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])
//   // console.log(arguments[3])
//   // console.log(arguments[4])

//   var sum = 0

//   for (var value of arguments) {
//     sum +=  value
//   }
//   console.log(sum)

//   console.log(typeof arguments)
//   console.log(Array.isArray(arguments))
  
// }
// test(1, 2, 3, 4, 5)

//rest

// var test = (...rest, a,b, ) => {
//   console.log(rest)
//   // console.log(rest[0])
//   // console.log(rest[1])
//   // console.log(rest[2])
//   // console.log(rest[3])
//   // console.log(rest[4])

//   var sum = 0

//   for (var value of rest) {
//     sum +=value
//   }
//   console.log(sum)
// }
// test(1, 2, 3, 4, 5)


//scope
// storage 

var a = 1
let b = 2
const c = 3

//access

console.log(a)
console.log(b)
console.log(c)

function test() {

  //storage
  var d = 4
  let e = 5
  const f = 6
  // access
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log(f)


  if (true) {
    //storage

    var g = 7
    let h = 8
    const i = 9
    // access 
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(e)
    console.log(f)
    console.log(g)
    console.log(h)
    console.log(i)
  }

  console.log(g)
  // console.log(h)
  // console.log(i)
}
test()
// console.log(d)
// console.log(e)
// console.log(f)

