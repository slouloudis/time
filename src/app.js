let timeDisplay = document.querySelectorAll('#time > span')
const input = document.getElementById('time-input')

// when the user clicks on a span, we direct their input to the input element. seamless!
timeDisplay.forEach(span => {
  span.addEventListener('click', () => {
    input.focus()
    console.log(document.activeElement)
  })
})



// now a function to update the span value when the user types in the input. 

input.addEventListener('input', e => {
  e.preventDefault()
  console.log(e.target.value)
})

// user clicks on span > input focued > get user input > update spans in 'reverse' order > max one digit per span. 