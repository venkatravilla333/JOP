import hello from "./child.js"

var x = 100

var y = () => {
  console.log('test')
}
var z = 200

console.log(hello.name)
console.log(hello.age)

export default z
export { x, y }





