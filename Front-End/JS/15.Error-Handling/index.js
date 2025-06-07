

// console.log('hi')
// try {
//   console.log(age)
// } catch (error) {
//   console.log(error)
//   console.log('hello')
// }
// console.log('sachin')


var age = 18

if (age < 18) {
  throw new Error('Age must be 18 or more to have vote')
} else {
  console.log(age, 'having vote right')
}
