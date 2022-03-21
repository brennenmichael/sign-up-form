// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName("form")[0];

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.querySelector(".error-message");

password.addEventListener("input", (e) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (password.value === confirmPassword.value) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    console.log("EQUAL");
    errorMessage.textContent = ""; // Reset the content of the message
    errorMessage.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", function (event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    errorMessage.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    errorMessage.textContent = "Entered value needs to be an e-mail address.";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    errorMessage.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  errorMessage.className = "error active";
}
