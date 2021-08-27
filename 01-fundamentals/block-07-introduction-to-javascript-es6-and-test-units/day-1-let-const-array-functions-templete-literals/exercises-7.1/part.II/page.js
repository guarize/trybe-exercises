const btn = document.getElementById('btn');
const stringP = document.getElementById('string');
const nameInput = document.getElementById('name');
const skillsBtn = document.getElementById('skills-btn');
const skillsP = document.getElementById('skills-p');
const str = 'Tryber x aqui';
const skills = ['JavaScript', 'CSS', 'HTML', 'Git', 'Bootstrap'];

let clickCount = 0;
const counter = document.getElementById('counter');
counter.innerText = clickCount;

btn.addEventListener('click', () => {
  counter.innerText = Number(counter.innerText) + 1;
});

nameInput.addEventListener('blur', () => {
  stringP.innerText = str.replace(/x/g, nameInput.value);
});

skillsBtn.addEventListener('click', () => {
  const strSkills = skills.toString().replace(/,/g, '; ');
  skillsP.innerText = `${stringP.innerText}! Minhas cinco principais habilidades são: ${strSkills} #goTrybe`;
});
