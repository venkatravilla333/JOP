
var person = {
  name: 'sachin',
  age: 40,
  address: {city: 'mumbai',  road: 101}
}
console.log(person)

// console.log(person.address.city)
// console.log(person.address1.city)
// console.log(person && person.address1 && person.address1.city)  //ES-5 &&
console.log(person.address1?.city)  //ES-11 &&