
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

// var a = 1
// let b = 2
// const c = 3

//access

// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   //storage
//   var d = 4
//   let e = 5
//   const f = 6
//   // access
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)


//   if (true) {
//     //storage

//     var g = 7
//     let h = 8
//     const i = 9
//     // access
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }

//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }
// test()
// console.log(d)
// console.log(e)
// console.log(f)



//Hoisting
// console.log(a)
// var a = 1
// console.log(a)

// function test() {
//   // console.log(a)
//   // var a = 10
//   // console.log(a)
//   console.log(a)
//   if (true) {
//     var a = 100
//     console.log(a)
//   }
// }
// test()


// console.log(a)
// let a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = { value: 100 }
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(h)
// h()
// let h = function hello() {
//   console.log('named')
// }
// h()
// console.log(h)

// console.log(i)

// // i()
// var i = function () {
//   console.log('ananymous')
// }
// i()
// console.log(i)

// console.log(j)
// // j()
// var j = () => {
//   console.log('arrow')
// }
// // j()
// console.log(j)

// console.log(k)
// k()
// function k() {
//   console.log('declare')
// }
// console.log(k)
// k()

//var vs let vs const


//scope

//hoisting

//redeclaration

// var a = 10
// let a = 10
// const a = 10
// console.log(a)
// console.log(a)
// console.log(a)
// let a = 20
// console.log(a)
// console.log(a)
// console.log(a)

//re-assignment

// var a = 10
// let a = 10
// const a = 10
// console.log(a)

// a = 20
// console.log(a)

//Initialization

// var a
// let a
// const a
// console.log(a)
// a = 10
// console.log(a)



// var x = 1
// console.log(x)
// function test() {
  // console.log(x)
//    x = 10
//   console.log(x)
// }
// console.log(x)
// test()

// {
//   // var x = 10
//   let x = 10
//   // console.log(x)
// }
// console.log(x)


//closure

// function outer() {
//   var x = 100
//   return function inner() {
//     console.log(x)
//   }
// }

// var inner = outer()
// inner()



//IIFE  (ES-5)


// (() => {
//   var a = 100
//   console.log(a)
// })()

// console.log(a)

//function currying


// without curry

// function test(a, b, c) {
//   var sum = a + b + c
//   console.log(sum)
// }

// test(1, 2, 3)

// with curry

// function funA(a) {
//   return function funB(b) {
//     return function funC(c) {
//       var sum = a + b + c
//       console.log(sum)
//     }
//   }
// }

// funA(1)(2)(3)
// var funB = funA(1)
// var funC = funB(2)
// funC(3)


// function disCal(price, dis) {
//   var disAmout = price * dis
//   console.log(disAmout)
// }

// disCal(1000, 0.1)
// disCal(1000, 0.2)
// disCal(1000, 0.3)
// disCal(1000, 0.4)
// disCal(1000, 0.5)

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmout = price * dis
//     console.log(disAmout)
//   }
// }

// var calDis = calPrice(1000)
// calDis(0.1)
// calDis(0.2)
// calDis(0.3)
// calDis(0.4)
// calDis(0.5)


//first class function

// var x = function () {
//   return function inner() {
    
//   }
// }
// x(function cb(){})


//heigher order function

// function hof(cb) {
//   console.log('hof')
//  function inner() {
//     console.log('inner')
//   }
//   inner()
//   cb()
// }
// hof(function cb() {
//   console.log('cb')
// })


// function pure(a,b,c) {
//   console.log(a+b+c)
// }

// pure(1, 2, 3)

// function impure(a, b, c) {
//   var d = Math.random()*10
//   console.log(a+b+c+d)
// }

// impure(1,2,3)


// recurssion function

function factorial(n) {
  if (n <= 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let result = factorial(5);
console.log(result);








