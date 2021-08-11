const firstLi = document.getElementById('firstLi');
const secondLi = document.getElementById('secondLi');
const thirdLi = document.getElementById('thirdLi');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

// 1. Create a function that adds the class 'tech' to the selected element;
// - There must be only one element with the class 'tech'. How do you do this?

function addTechClass(event) {
  const techElement = document.querySelector(".tech");
  techElement.classList.remove('tech');
  event.target.classList.add("tech");
}

firstLi.addEventListener("click", addTechClass);
secondLi.addEventListener("click", addTechClass);
thirdLi.addEventListener("click", addTechClass);

// Create a function that, when typed into the text box, changes the text of the element
// element with the class 'tech;

function changeText() {
  document.querySelector('.tech').innerText = input.value;
}

input.addEventListener("keyup", changeText);

// Create a function that, when double-clicking 'Meu top 3 do Spotrybefy', it
// redirects to some page;
// 1. How about redirecting to your portfolio?

function redirectToGithub(event) {
  window.open("https://github.com/guarize")
}

myWebpage.addEventListener("dblclick", redirectToGithub)

// Create a function that, when you hover the mouse over 'My Spotrybefy top 3', changes
// its color;

function hoverColor(event) {
  event.target.style.color = 'yellow';
}

myWebpage.addEventListener("mouseover", hoverColor);

myWebpage.addEventListener("mouseleave", function(event) {
  event.target.style.color = "white"
});