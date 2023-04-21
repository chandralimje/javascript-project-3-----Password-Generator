let inputId = document.getElementById("input");
let buttonId = document.getElementById("btn");

function createpassword() {
  let charecters =
    "0123456789abcdefghijklmnopqrstuvwxyz@#$&ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passLength = 10;

  let password = "";

  for (let i = 0; i < passLength; i++) {
    let randomNumber = Math.floor(Math.random() * charecters.length);

    password = password + charecters.substring(randomNumber, randomNumber + 1);
  }

  inputId.value = password;
  navigator.clipboard.writeText(password);
}

buttonId.addEventListener("click", () => {
  createpassword();
});
