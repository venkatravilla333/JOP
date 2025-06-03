
var subChild = document.getElementById('subchild')

function subChildFun(e) {
  console.log('subchild')
  console.log(e)
  e.stopPropagation()
  console.log(e.target)
  console.log(e.clientX)
  console.log(e.clientY)
  console.log(e.offsetX)
  console.log(e.offsetY)
}

subChild.addEventListener('click', subChildFun,)

var child = document.getElementById('child')

function childFun(e) {
  console.log('child')
  console.log(e)
}

child.addEventListener('click', childFun)

var parent = document.getElementById('parent')

function parentFun(e) {
  console.log('parent')
  console.log(e)
}

parent.addEventListener('click', parentFun)