
var addBtn = document.getElementById('add')
console.log(addBtn)



var para = document.createElement('p')

var text = 'this is para'

console.log(para)
para.id = 'para'
para.className = 'mypara'

para.innerText = text

var body = document.getElementById('body')
console.log(body)


function addFun() {
  body.appendChild(para)
}

addBtn.addEventListener('click', addFun)





var h4 = document.createElement('h4')
console.log(h4)
h4.id = 'heading4'

h4.innerText = 'This is heading four'

// var text = document.createTextNode('This is heading four')
// console.log(text)

// h4.appendChild(text)

// body.appendChild(h4)
// body.insertBefore(h4, para)


//replace

var replaceBtn = document.getElementById('replace')

var h1 = document.createElement('h1')
h1.id = 'headingone'
h1.innerText = 'This is heading one'
console.log(h1)

function replaceFun() {
  body.replaceChild(h1, para)
  console.log('hi')
}


replaceBtn.addEventListener('click', replaceFun)

//remove

var removeBtn = document.getElementById('remove')

function removeFun() {
  body.removeChild(h1)
}

removeBtn.addEventListener('click', removeFun)
