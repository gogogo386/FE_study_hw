document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const nicknameInput = document.getElementById("nickname");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const pwConfirmInput = document.getElementById("pw_confirm");
  const signupButton = document.getElementById("signup");

  function checkInputs() {
    const isNameValid = nameInput.value.trim().length > 0;
    const isNicknameValid = nicknameInput.value.trim().length > 0;
    const isEmailValid = emailInput.value.trim().length > 0;
    const isPasswordValid = passwordInput.value.length >= 8;
    const isPwMatch = passwordInput.value === pwConfirmInput.value;

    if (
      isNameValid &&
      isNicknameValid &&
      isEmailValid &&
      isPasswordValid &&
      isPwMatch
    ) {
      signupButton.style.backgroundColor = "red";
      signupButton.disabled = false;
    } else {
      signupButton.style.backgroundColor = "#b3b3b3";
      signupButton.disabled = true;
    }
  }

  // 모든 input에 이벤트 리스너 추가
  nameInput.addEventListener("input", checkInputs);
  nicknameInput.addEventListener("input", checkInputs);
  emailInput.addEventListener("input", checkInputs);
  passwordInput.addEventListener("input", checkInputs);
  pwConfirmInput.addEventListener("input", checkInputs);
});
