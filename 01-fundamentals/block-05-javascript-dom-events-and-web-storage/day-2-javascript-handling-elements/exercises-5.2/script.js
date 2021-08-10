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

// 5

const sectionTagLeft = document.createElement('section');
sectionTagLeft.className = 'left-content';
mainTag.appendChild(sectionTagLeft);

// 6

const sectionTagRight = document.createElement('section');
sectionTagRight.className = 'right-content';
mainTag.appendChild(sectionTagRight);

// 7

const imageSmall = document.createElement('img');
imageSmall.src = 'https://picsum.photos/200'
imageSmall.className = 'small-image';
sectionTagLeft.appendChild(imageSmall);

// 8

const unorderedList = document.createElement('ul');
sectionTagRight.appendChild(unorderedList)

let numberList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let i = 0; i < numberList.length; i += 1) {
  let listItems = document.createElement('li');
  listItems.innerText = numberList[i];
  unorderedList.appendChild(listItems)
};

// 9

for (let i = 0; i < 3; i += 1) {
  let h3Tag = document.createElement('h3');
  h3Tag.innerText = `${"Title"} ${i}`;
  mainTag.appendChild(h3Tag);
};

//------------------------------------------
// Part 2.

// 1

h1Tag.className = 'title';

// 2



// 3



// 4



// 5



// 6