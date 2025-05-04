const passwordInput = document.getElementById("login_password");
const idInput = document.getElementById("login_id");
const loginButton = document.getElementById("login");

function checkInputs() {
  let isIdValid = idInput.value.trim().length > 0;
  let isPasswordValid = passwordInput.value.length >= 8;

  if (isIdValid && isPasswordValid) {
    loginButton.style.backgroundColor = "red";
    loginButton.style.borderColor = "red";
    loginButton.disabled = false;
  } else {
    loginButton.style.backgroundColor = "gray";
    loginButton.style.borderColor = "gray";
    loginButton.disabled = true;
  }
}

idInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);
