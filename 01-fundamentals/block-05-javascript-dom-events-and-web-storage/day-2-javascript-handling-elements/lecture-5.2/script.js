// Part I

// Access the element elementoOndeVoceEsta.

const elementWhereImAt = document.getElementById('elementoOndeVoceEsta');

// Access pai from elementoOndeVoceEsta and add a color to it.

const parent = document.getElementById('elementoOndeVoceEsta').parentElement;
parent.style.color = 'red';

// Access the `primeiroFilhoDoFilho` and add a text to it.

const firstSonsChild = document.getElementById('elementoOndeVoceEsta').firstElementChild;
firstSonsChild.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus dicta cupiditate fugit. Neque incidunt'

// Access `primeiroFilho` from `pai`.

const firstChild = parent.firstElementChild;

// Now access the `primeiroFilho` from `elementoOndeVoceEsta` element.

const firstChild2 = elementWhereImAt.previousElementSibling;

// Now access the text `Atenção!` from `elementoOndeVoceEsta`.

const textWarning = elementWhereImAt.nextSibling;

// Now access the `terceiroFilho` from `elementoOndeVoceEsta` element.

const thirdChild = elementWhereImAt.nextElementSibling;

// Now access the `terceiroFilho` from `pai`.

const thirdChild2 = parent.lastElementChild.previousElementSibling;

// Part II

// Create a sibling for `elementoOndeVoceEsta`.

const parent2 = document.getElementById('pai');
const siblingElementWhereImAt = document.createElement('section');
siblingElementWhereImAt.id = 'irmaoElementoOndeVoceEsta'
parent2.appendChild(siblingElementWhereImAt);

// Create a child for `elementoOndeVoceEsta`.

const childElementWhereImAt = document.createElement('section');
childElementWhereImAt.id = 'filhoElementoOndeVoceEsta';
elementWhereImAt.appendChild(childElementWhereImAt);

// Create a child for `primeiroFilhoDoFilho`.

const childFirstSonsChild = document.createElement('section');
childFirstSonsChild.id = 'filhoPrimeiroFilhoDoFilho';
firstSonsChild.appendChild(childFirstSonsChild)

// From this created child, access `terceiroFilho`.

const thirdChild3 = childFirstSonsChild.parentElement.parentElement.nextElementSibling;
console.log(thirdChild3)