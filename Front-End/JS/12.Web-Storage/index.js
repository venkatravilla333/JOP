
var setBtn = document.getElementById('store')


function setFun() {
  localStorage.setItem('name', 'sachin')
  localStorage.setItem('age', 40)
  sessionStorage.setItem('name', 'sachin')
  sessionStorage.setItem('age', 40)
}

setBtn.addEventListener('click', setFun)


var getBtn = document.getElementById('get')


function getFun() {
  console.log(localStorage.getItem('name'))
  console.log(sessionStorage.getItem('name'))
}

getBtn.addEventListener('click', getFun)

var removeBtn = document.getElementById('remove')


function removeFun() {
  console.log(localStorage.removeItem('name'))
  console.log(localStorage.removeItem('age'))
  console.log(sessionStorage.removeItem('name'))
  console.log(sessionStorage.removeItem('age'))
}

removeBtn.addEventListener('click', removeFun)


var clearBtn = document.getElementById('clear')


function clearFun() {
  console.log(localStorage.clear())
  console.log(sessionStorage.clear())
  
}

clearBtn.addEventListener('click', clearFun)



