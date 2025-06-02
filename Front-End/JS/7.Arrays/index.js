
// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

//how to add

// ending

// arr.push(6)
// arr.unshift(0)
// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(2, 0, 6)
// console.log(arr)

//Remove

// ending

// arr.pop()
// arr.shift()
// arr.splice(0, 2)
// arr.splice(arr.length-1, 1)
// arr.splice(3, 1)
// console.log(arr)

//Remove all items from array


var arr1 = [1, 2, 3, 4, 5]
var arr2 = arr1


// arr1.length = 0
// arr1 = []

// arr1.splice(0, arr1.length)

// console.log(arr1)
// console.log(arr2)

//How to find array values

// var arr = [1, 2, 3, 4, 5, 3, 7, 3]
var arr = [{course: 'nodejs'}, {course: 'reactjs'}, {course: 'html'}, {course: 'reactjs'}]


//primitives

// console.log(arr.indexOf(3))
// console.log(arr.indexOf(30))
// console.log(arr.lastIndexOf(3))
// console.log(arr.lastIndexOf(30))
// console.log(arr.includes(3))
// console.log(arr.includes(30))

//reference
// console.log(arr.indexOf({course:'reactjs'}))
// console.log(arr.includes({course:'reactjs'}))

// console.log(arr.find((obj) => {
//   return obj.course === 'reactjs'
// }))

// console.log(arr.find((obj) => {
//   return obj.course === 'java'
// }))
// console.log(arr.findIndex((obj) => {
//   return obj.course === 'reactjs'
// }))
// console.log(arr.findIndex((obj) => {
//   return obj.course === 'java'
// }))
// console.log(arr.findLastIndex((obj) => {
//   return obj.course === 'reactjs'
// }))
// console.log(arr.findLastIndex((obj) => {
//   return obj.course === 'java'
// }))


// var originalArr = ['sachin', { road: 101 }, function play() { }]


// var copiedArr = originalArr //normal copy
// var copiedArr = JSON.parse(JSON.stringify(originalArr)) //deep copy
// var copiedArr = lodash.cloneDeep(originalArr) //deep copy
// var copiedArr = Object.assign([], originalArr) //shallow copy
// var copiedArr = originalArr.slice() //shallow copy
// var copiedArr = [...originalArr] //shallow copy

// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)

//Merge

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11,12,13]

// console.log(arr1)
// console.log(arr2)

// var combineArr = arr1.concat(arr2, arr3) //ES-5
// var combineArr = [...arr1, ...arr2, ...arr3] //ES-6
// console.log(combineArr)

// loops

// var arr = [1, 2, 3, 4, 5]

//without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//with using loop

// for (var value of arr) {
//   console.log(value)
// }

// arr.forEach((value, index) => {
//   console.log(value, index)
// })

// var arr = [1, 2, 3, 4, 5]

// console.log(arr, typeof arr)

// var str = arr.join()
// console.log(str, typeof str)

// var myArr = str.split()
// var myArr = str.split('')
// var myArr = str.split(',')
// console.log(myArr, typeof myArr)

// var arr = [{name: 'sachin', age: 40}, {name: 'kohli', age: 35}, {name:'gill', age: 20}]

// console.log(arr)

// var filteredArr = arr.filter((person) => {
//   return person.age >= 50
// })

// console.log(filteredArr)

//map method

// var arr = [1, 2, 3, 4, 5, 6]
// console.log(arr)

// var mapRes= arr.map((item) => {
//  return item*100
// })
// console.log(mapRes)

// var arr = [1, 2, 3, 4, 5]


// var reduceRes = arr.reduce((cum, cur) => {
//   console.log(cum, cur)
//   return cum+cur
// },0)

// console.log(reduceRes)

//map vs forEach

// var arr = [1, 2, 3, 4, 5]

// var mapRes = arr.map((value) => {
//   return value * 100
// })

// console.log(mapRes)

// var forEachRes = arr.forEach((value) => {
//   console.log(value * 100)
// })
// console.log(forEachRes)

// how to remove deplicate values from array

var arr = [1, 2, 3, 4, 3, 5, 3]
console.log(arr)

// console.log(new Set(arr))

// var uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

var uniqueArr = []

function removeDuplicates(arr) {
  // console.log(arr)
  for (var value of arr) {
    // console.log(value)
    if (uniqueArr.indexOf(value) === -1) {
      uniqueArr.push(value)
    }

  }
}

removeDuplicates(arr)

console.log(uniqueArr)











