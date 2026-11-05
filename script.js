/* ФУНКЦИЯ 1. Светлая / тёмная тема */
const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme); // атрибут у <html>
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";      // значок кнопки
  localStorage.setItem("theme", theme);                       // запоминаем выбор
}

setTheme(localStorage.getItem("theme") || "light");

themeBtn.addEventListener("click", function () {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});


/* ФУНКЦИЯ 2. Мобильное меню (бургер) */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  nav.classList.toggle("open"); // есть класс — убираем, нет — добавляем
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open"); // клик по ссылке закрывает меню
  });
});


/* ФУНКЦИЯ 3. Проверка формы */
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // страница не перезагружается

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Заполните все поля";
    formMessage.style.color = "red";
  } else if (!email.includes("@")) {
    formMessage.textContent = "Email должен содержать @";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Спасибо, " + name + "! Сообщение отправлено.";
    formMessage.style.color = "green";
    form.reset(); // очищаем поля
  }
});
/* ФУНКЦИЯ 4. Кнопка "наверх" */
const toTop = document.getElementById("toTop");

// при прокрутке: ниже 300px — показываем кнопку, выше — прячем
window.addEventListener("scroll", function () {
  toTop.classList.toggle("show", window.scrollY > 300);
});

// нажали — плавно едем в самый верх
toTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});