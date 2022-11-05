const singUpBtn = document.querySelector(".singup-btn");
const singInBtn = document.querySelector(".singin-btn");
const form = document.querySelector(".form");
const body = document.querySelector("body");
const section = document.querySelector(".section");
singUpBtn.addEventListener("click", () => {
  form.classList.add("active");
  body.classList.add("active");
  section.classList.add("active");
});
singInBtn.addEventListener("click", () => {
  form.classList.remove("active");
  body.classList.remove("active");
  section.classList.remove("active");
});
