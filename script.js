document.getElementById('button').addEventListener('click', compare)
let date = 0
let age = 0

function compare () {
  age = document.getElementById('input').value
  age = parseInt(age)
  date = document.getElementById('input2').value
  date = parseInt(date)

  if (date !== 'saturday' || date !== 'sunday' || age <= 18) {
    userInput = document.getElementById('answer').innerHTML = "Time for school!"
  } else if (date !== 'saturday' || date !== 'sunday' || age > 18) {
    userInput = document.getElementById('answer').innerHTML = "Time for work!"
  } else if (date === 'saturday' || date === 'sunday' || age <= 18) {
    userInput = document.getElementById('answer').innerHTML = 'you must pay regular price'
  } else if (date === 'saturday' || date === 'sunday' || age > 18) {
    userInput = document.getElementById('answer').innerHTML = 'you must pay regular price'
  }
}