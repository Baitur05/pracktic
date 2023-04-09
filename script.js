const btn = document.querySelector("button");
const form = document.querySelector("form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const text = document.querySelector("h2");
let num = 3;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "nurzhigit" && password.value === "12345") {
    text.style.color = "green";
    text.innerHTML = "доступ открыт";
  } else {
    if (email.value === "" && password.value === "") {
      text.innerHTML = "Empty";
      text.style.color = "black";
    } else {
      num--;
      if (num === 2) {
        text.innerHTML = "У вас осталось 2 попытки";
        email.value = "";
        password.value = "";
      }
      if (num === 1) {
        text.innerHTML = "У вас осталось 1 попытки";
        email.value = "";
        password.value = "";
      }
      if (num === 0) {
        text.style.color = "red";
        text.innerHTML = "доступ закрыт  ";
        btn.setAttribute("disabled", "disabled");
        email.value = "";
        password.value = "";
      }
    }
  }
});
const block = document.querySelector(".block");
const btn2 = document.querySelector(".btn2");
const rip = document.querySelector(".rip");
const delBtn = document.querySelector(".xx");

btn2.addEventListener("click", () => {
  block.style.display = "block";
  rip.style.transition = "6s";
  rip.style.padding = "70px 90px";
});
delBtn.addEventListener("click", () => {
  block.style.display = "none";
});
