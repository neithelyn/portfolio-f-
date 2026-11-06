const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);

  if (theme === "dark") {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }

  localStorage.setItem("theme", theme);
}

let savedTheme = localStorage.getItem("theme");

if (savedTheme === null) {
  savedTheme = "light";
}

setTheme(savedTheme);

themeBtn.addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});


const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", function () {
  if (nav.classList.contains("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
});

const navLinks = nav.querySelectorAll("a");

for (const link of navLinks) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
}


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent  = "Заполните все поля";
    formMessage.style.color = "red";
  } else if (email.includes("@") === false) {
    formMessage.textContent = "Email должен содержать @";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Спасибо, " + name + "! Сообщение отправлено.";
    formMessage.style.color = "green";
    form.reset();
  }
});


const toTop = document.getElementById("toTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    toTop.classList.add("show");
  } else {
    toTop.classList.remove("show");
  }
});

toTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});