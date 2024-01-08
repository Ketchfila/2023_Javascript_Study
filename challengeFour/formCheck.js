// Gain Access to form elements
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm() {
   const nameField = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
   if(nameField.value === ""){
document.getElementById('lbl_name').style.color = "red"   }
    if (email.value === "") {
        email.style.backgroundColor = "red";
    }
    if (phone.value === "") {
        phone.style.backgroundColor = "red";
    }
}

//make constant gain access programmatically

    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */

