const form = document.getElementsByTagName("form")[0];

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.querySelector(".error-message");

password.addEventListener("input", (e) => {
  if (password.value === confirmPassword.value && password.value !== "") {
    errorMessage.textContent = "";
    errorMessage.classList.remove("active");
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  } else {
    errorMessage.textContent = "*Passwords do not match.";
    errorMessage.classList = "error-message active";
    password.className = "error";
    confirmPassword.className = "error";
  }
});

confirmPassword.addEventListener("input", (e) => {
  if (password.value === confirmPassword.value && password.value !== "") {
    errorMessage.textContent = "";
    errorMessage.classList.remove("active");
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  } else {
    errorMessage.textContent = "*Passwords do not match.";
    errorMessage.classList += " active";
    password.className = "error";
    confirmPassword.className = "error";
  }
});

form.addEventListener("submit", (e) => {
  // if the email field is valid, we let the form submit

  if (password.value === confirmPassword.value) {
    e.preventDefault();
  }
});
