const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// 1.

function addTechClass(event) {
  const techElement = document.querySelector(".tech");
  techElement.classList.remove('tech');
  event.target.classList.add("tech");
}

firstLi.addEventListener("click", addTechClass);
secondLi.addEventListener("click", addTechClass);
thirdLi.addEventListener("click", addTechClass);

// 2.

function changeText() {
  document.querySelector('.tech').innerText = input.value;
}

input.addEventListener("keyup", changeText);

// 3.

function redirectToGithub(event) {
  window.open("https://github.com/guarize")
}

myWebpage.addEventListener("dblclick", redirectToGithub)

// 4.

function hoverColor(event) {
  event.target.style.color = 'yellow';
}

myWebpage.addEventListener("mouseover", hoverColor);

myWebpage.addEventListener("mouseleave", function(event) {
  event.target.style.color = "white"
});