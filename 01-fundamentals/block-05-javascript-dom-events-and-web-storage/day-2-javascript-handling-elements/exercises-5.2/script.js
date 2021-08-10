// 1

const body = document.getElementsByTagName('body');
const h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1Tag);

// 2

const mainTag = document.createElement('main');
mainTag.className = 'main-content';
document.body.appendChild(mainTag);

// 3

const sectionTagCenter = document.createElement('section');
sectionTagCenter.className = 'center-content';
mainTag.appendChild(sectionTagCenter);

// 4

const pTag = document.createElement('p');
pTag.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quas. Quod nisi illo ab quas expedita, qui tempora accusamus culpa rem suscipit autem itaque, fugiat velit libero! Officia, veniam ipsam.';
sectionTagCenter.appendChild(pTag)
