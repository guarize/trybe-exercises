// 1 . Make the necessary changes to the function so that its behavior respects the scope in which each variable was declared.
// Modify the structure of the function to make it an arrow function.
// Modify the concatenations to template literals.

function testingScope(escopo) {
  if (escopo) {
    const ifScope = `${'Não devo ser utilizada fora do meu escopo (if)'}. ${'Ótimo, fui utilizada no escopo!'}`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else).';
    console.log(elseScope);
  }
}

testingScope(true);

// 

const oddsAndEvens = () => [13, 3, 4, 10, 7, 2].sort((a, b) => a - b);

// Your code here:

console.log(`The numbers ${oddsAndEvens()} are in ascending order!`);