const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const errorMessage = document.querySelector(".errorMessage");
password.addEventListener("input", checkPasswordMatch);
confirmPassword.addEventListener("input", checkPasswordMatch);
function checkPasswordMatch() {
  console.log(password.value);
  console.log(confirmPassword.value);
  if (password.value !== confirmPassword.value) {
    password.className = "error";
    confirmPassword.className = "error";
    errorMessage.className = "errorMessage showErrorMessage";
  } else {
    password.className = "";
    confirmPassword.className = "";
    errorMessage.className = "errorMessage";
  }
}
