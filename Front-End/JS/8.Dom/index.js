
// console.dir(document)
// console.log(document)

// console.log(document.title)
// console.log(document.URL)
// console.log(document.all)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.body)

//how to access dom elements into js file


//ID

// var para1 = document.getElementById('one')
// console.log(para1)
// para1.innerText = 'hello'
// para1.style.background = 'yellow'

//Class

// var paras = document.getElementsByClassName('para')
// console.log(paras)
// paras[0].style.color = 'red'
// paras[1].style.color = 'blue'

// Tag

// var paras = document.getElementsByTagName('p')
// console.log(paras)

// QuerySelector

// var para = document.querySelector('#one')
// var para = document.querySelector('.para')
// var para = document.querySelector('p')
// console.log(para)

// QuerySelectorall

// var para = document.querySelectorAll('#one')
// var para = document.querySelectorAll('.para')
// var para = document.querySelectorAll('p')
// console.log(para)

//Traversing of DOM

var currentElement = document.getElementById('current')
console.log(currentElement)
currentElement.style.background = 'yellow'

//parent

var parent = currentElement.parentElement
console.log(parent)
parent.style.background = 'green'

//siblings

var preSib = currentElement.previousElementSibling

console.log(preSib)
preSib.style.background = 'black'
preSib.style.color = 'white'

var nextSib = currentElement.nextElementSibling

console.log(nextSib)
nextSib.style.background = 'black'
nextSib.style.color = 'red'

//childs

var firstChild = currentElement.firstElementChild
console.log(firstChild)

firstChild.style.color = 'red'

var lastChild = currentElement.lastElementChild
console.log(lastChild)

lastChild.style.color = 'red'

var childs = currentElement.children
console.log(childs)





