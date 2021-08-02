// Parte II - Funções
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function checkPalindrome(str) {
  let word = str;
  let reverseStr = "";

  for (let i = (word.length - 1); i >= 0; i -= 1) {
    reverseStr = reverseStr.concat(word[i]);
  }
  if (word === reverseStr) {
    return true;
  } return false;
}


console.log(checkPalindrome('arara'))
