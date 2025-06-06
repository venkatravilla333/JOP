

// console.log(window)

// var timeoutBtn = document.getElementById('timeout')


// var timerCount = setTimeout(() => {
//   console.log('sachin')
// }, 4000)

// function timeoutFun() {
//   clearTimeout(timerCount)
// }

// timeoutBtn.addEventListener('click', timeoutFun)



var intervalBtn = document.getElementById('interval')


var timerCount = setInterval(() => {
  console.log('sachin')
}, 4000)

function intervalFun() {
  clearInterval(timerCount)
}

intervalBtn.addEventListener('click', intervalFun)
