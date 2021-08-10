function allChanges() {
  changeText();
  sideSquareColor();
  centerSquareColor();
  correctText();
  upperCaseParagraph();
  displayParagraph();
}

//         Here you will modify existing elements using only the:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  1. Create a function that changes the text in the <p> tag to a description of how you see yourself in 2 years. (Do not spend time thinking about the text, but doing the exercise)

function changeText() {
  document.querySelector('.center-content p').innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi beatae minima corporis quo itaque, rem fugit doloremque quasi veritatis delectus sint neque, libero explicabo recusandae tempore. Molestias repudiandae modi maxime."
};

//  2. Create a function that changes the color of the yellow square to Trybe's green square (rgb(76,164,109)).

function sideSquareColor() {
  document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)"
};

//  3. Create a function that changes the color of the red square to white.

function centerSquareColor() {
  document.querySelector(".main-content .center-content").style.backgroundColor = "white";
}

//  4. Create a function that corrects the text in the <h1> tag.

function correctText() {
  document.querySelector("header .title").innerText = "Exercício 5.1 - JavaScript"
};

//  5. Create a function that changes all text in the <p> tag to uppercase.

const pElements = document.getElementsByTagName("p");

function upperCaseParagraph() {
  for (let i = 0; i < pElements.length; i += 1) {
    pElements[i].innerHTML = pElements[i].innerHTML.toUpperCase();
  }
}

//  6. Create a function that displays the contents of all <p> tags in the console.

function displayParagraph() {
  for (let i = 0; i < pElements.length; i += 1) {
    console.log(pElements[i]);
  }
}
