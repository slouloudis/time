let timeDisplay = document.querySelectorAll('#time > span:not(.time-digit)')
const input = document.getElementById('time-input')

function timerInputInit() {
  // when the user clicks on a span, we direct their input to the input element. seamless!
  timeDisplay.forEach(span => {
    span.addEventListener('click', () => {
      input.focus()
    })
  })
  updateTimeDisplay()
    // user clicks on span > input focued > get user input > update spans in 'reverse' order > max one digit per span. 
}

timerInputInit()

function updateTimeDisplay() {
      // store span intial value?
      // now a function to update the span value when the user types in the input. 
      let lastLength = 0;
      input.addEventListener('input', e => {
        e.preventDefault()
        let newDigit = e.target.value.substring(e.target.value.length - 1)
        let currentLength = e.target.value.length
        // if the user has pressed backspace 
        if (currentLength < lastLength) {
          console.log('you pressed backspace')
            for (let i = timeDisplay.length - 1; i < 0; i--) {
              timeDisplay[i].innerText = timeDisplay[i - 1].innerText
            } 
        } else {
            // just loop through forwards and set the innerText to be the element of the one 'ahead' of it, then we update the new digit in after. 
            for (let i = 0; i < timeDisplay.length - 1; i++) {
              timeDisplay[i].innerText = timeDisplay[i + 1].innerText
            }
            // how how to handle deleting the input. 
            console.log(e.target.value)
            timeDisplay[timeDisplay.length - 1].innerText = newDigit
            lastLength = e.target.value.length
        }
      })
}