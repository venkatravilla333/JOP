var table = document.getElementById('table')
console.log(table)

function tableFun(e) {
  console.log('hi')
  console.log(e.target)
}
table.addEventListener('click', tableFun)