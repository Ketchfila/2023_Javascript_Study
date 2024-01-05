//setup access to html elements
const button = document.querySelectorAll('button');
const display = document.querySelector('.display');
//add listeners to all buttons
button.forEach(
  function(button){
      button.addEventListener("click", calculate);

  }
)
//calculate function
function calculate(event) {
    //current clicked buttons value
    const clickedValue = event.target.value;
//check if = sign was clicked
    if (clickedValue === "=") {
        //check if display is empty
        if (display.value !== "") {
            display.value = eval(display.value);
    }

    } else if (clickedValue === "C") {
        //clear display
        display.value = "";
    } else {
        //otherwise concatenate it to the display
        display.value += clickedValue;
    }
}