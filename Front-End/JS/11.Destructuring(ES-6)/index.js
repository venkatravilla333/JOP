
// var person = {
//   name: 'sachin',
//   age: 40,
//   address: {city: 'mumbai', road: 101}
// }

// //without

// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)


// // with


// var { name, age, address: {city, road} } = person
// var {city, road} = address


// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)


var arr = ['sachin', { city: 'mumbai', road: 101, bats: {num: 100} }, ['kohli', 'dhoni']]

// without

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1].city)
// console.log(arr[1].road)
// console.log(arr[2][0])
// console.log(arr[2][1])

// with

// var [name1, {city, road, bats: {num}}, [name2, name3]] = arr

// console.log(name1)
// console.log(city)
// console.log(road)
// console.log(name2)
// console.log(name3)
// console.log(num)