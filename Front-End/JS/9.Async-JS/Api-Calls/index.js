
var getAllBtn = document.getElementById('all')

function getAllFun() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
    return res.json()
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
  })
}

getAllBtn.addEventListener('click', getAllFun)


var getSingleBtn = document.getElementById('single')

function getSingleFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then((res) => {
    return res.json()
    }).then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
  })
}

getSingleBtn.addEventListener('click', getSingleFun)


var newObj = {
  userId: 200,
  title: 'my title',
  body: 'my body'
}
var sendBtn = document.getElementById('send')
function sendBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    headers: {
      'Content-Type':'Application/json'
    },
    body: JSON.stringify(newObj)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
   
}

sendBtn.addEventListener('click', sendBtnFun)


var newObj = {
  userId: 200,
  title: 'my title',
  body: 'my body'
}
var updateBtn = document.getElementById('update')
function updateBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-Type':'Application/json'
    },
    body: JSON.stringify(newObj)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
   
}

updateBtn.addEventListener('click', updateBtnFun)


var deleteBtn = document.getElementById('delete')
function deleteBtnFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'DELETE',
    headers: {
      'Content-Type':'Application/json'
    },
   
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })
   
}

deleteBtn.addEventListener('click',deleteBtnFun)