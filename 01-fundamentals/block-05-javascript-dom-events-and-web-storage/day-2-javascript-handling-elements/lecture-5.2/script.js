// Part I

// Access the element elementoOndeVoceEsta.

const elementWhereImAt = document.getElementById('elementoOndeVoceEsta');

// Access pai from elementoOndeVoceEsta and add a color to it.

const parent = document.getElementById('elementoOndeVoceEsta').parentNode;
parent.style.color = 'red';

// Access the `primeiroFilhoDoFilho` and add a text to it.

const firstSonsChild = document.getElementById('elementoOndeVoceEsta').firstElementChild;
firstSonsChild.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellendus dicta cupiditate fugit. Neque incidunt'

// Access `primeiroFilho` from `pai`.

const firstChild = parent.firstElementChild;

// Now access the `primeiroFilho` from `elementoOndeVoceEsta` element.

elementWhereImAt.parentNode.firstElementChild;

// Now access the text `Atenção!` from `elementoOndeVoceEsta`.

elementWhereImAt.nextSibling;

// Now access the `terceiroFilho` from `elementoOndeVoceEsta` element.

elementWhereImAt.nextElementSibling;

// Now access the `terceiroFilho` from `pai`.

parent.lastElementChild.previousElementSibling;

// Part II

