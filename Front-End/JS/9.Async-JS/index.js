
// console.log('hi')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 4000)

// console.log('hello')

// setTimeout(() => {
//   console.log('Timer-2')
// }, 0)

// Promise.resolve().then(() => { console.log('PR-1') }).then(() => { console.log('PR-2') })

// console.log('sachin')

// setTimeout(() => {
//   console.log('Timer-3')
// }, 1000)

// console.log('bye')

//callback

// function fetchData(num, diplayData) {
//   setTimeout(() => {
//     // var data = 'sachin'
//     var data = num*num
//     diplayData(data)
//   }, 4000)
// }

// fetchData(2, function diplayData(data1) {
//   console.log(data1)
//   fetchData(data1, function diplayData(data2) {
//     console.log(data2)
//     fetchData(data2, function diplayData(data3) {
//       console.log(data3)
//       fetchData(data3, function diplayData(data4) {
//         console.log(data4)
//         fetchData(data4, function diplayData(data5) {
//           console.log(data5)
//         })
//       })
//     })
//   })
// })

//promise


// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
// }

// fetchData(2).then((data1)=> {
//   console.log(data1)
//   return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//   return fetchData(data2)
// }).then((data3) => {
//   console.log(data3)
//   return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })

//async await

// function fetchData(num) {
// return  new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
// }

// // fetchData()

// async function diplayData() {
//   var data1 =  await fetchData(2) //async
//   console.log(data1) //async
//   var data2 = await fetchData(data1) //async
//   console.log(data2)
//   var data3 = await fetchData(data2) //async
//   console.log(data3)
//   var data4 = await fetchData(data3) //async
//   console.log(data4)

// }

// diplayData()


var pr1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('PR-1')
  }, 2000)
})
var pr2 = new Promise((res, rej) => {
  setTimeout(() => {
  res('PR-2')
  }, 4000)
})
var pr3 = new Promise((res, rej) => {
  setTimeout(() => {
  res('PR-3')
  }, 0)
})

// Promise.race([pr1, pr2, pr3]).then((res) => { console.log(res) })

// Promise.all([pr1, pr2, pr3]).then((res)=>{console.log(res)})
Promise.allSettled([pr1, pr2, pr3]).then((res)=>{console.log(res)})











