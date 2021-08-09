// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados.

function operadoresAritmeticos(a, b, operacao) {

  if (operacao == "+") {
    console.log(a + b);
  } else if (operacao == "-") {
    console.log(a - b);
  } else if (operacao == "*") {
    console.log(a * b);
  } else if (operacao == "/") {
    console.log(a / b);
  } else if (operacao == "%") {
    console.log(a % b);
  } else {
    console.log("Not an operator");
  }

}

// console.log(operadoresAritmeticos(10, 5, "*"));

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

function maiorMenor(a, b) {

  if (a > b) {
    console.log(a);
  } else if (b > a) {
    console.log(b);
  } else {
    console.log("Numbers are the same");
  }

}

// console.log(maiorMenor(8, 6));
// console.log(maiorMenor(6, 6));

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

function maiorMenor3(a, b, c) {

  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else if (c > a && c > b) {
    console.log(c)
  } else {
    console.log("Numbers are the same");
  }

}

// console.log(maiorMenor3(10, 8, 6));

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function positiveNegative(num) {

  if (Math.sign(num) == 1) {
    console.log("Positive");
  } else if (Math.sign(num) == 0) {
    console.log("Zero");
  } else {
    console.log("Negative");
  }

}

// console.log(positiveNegative(-2));

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function triangleChecker(a, b, c) {

  if (a + b + c <= 180) {
    if (Math.sign(a) == 1 && Math.sign(b) == 1 && Math.sign(c) == 1) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
}

// console.log(triangleChecker(30, 50, 101));

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chessPieceMovement(piece) {

  let peca = piece.toLowerCase();

  if (peca == "rei") {
    console.log("Move in any direction - straights or diagonals.")
  } else if (peca == "rainha") {
    console.log("Can move and capture on any square in line of sight.")
  } else if (peca == "bispo") {
    console.log("A bishop may only move diagonally and can move as far as its line of sight.")
  } else if (peca == "cavalo") {
    console.log("Move in an 'L' shape: 2 Up and 1 Left/Right or 1 Up and 2 Left/Right.")
  } else if (peca == "torre") {
    console.log("A rook may only move straight.")
  } else if (peca == "peão") {
    console.log("Can only move once except when it makes its first move and then it can move 2 times.")
  } else {
    console.log("Not a chess piece.")
  }
}

// console.log(chessPieceMovement("CaValO"))

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

function gradeConverter(num) {

  if (num >= 90 && num <= 100) {
    console.log("A")
  } else if (num >= 80 && num < 90) {
    console.log("B")
  } else if (num >= 70 && num < 80) {
    console.log("C")
  } else if (num >= 60 && num < 70) {
    console.log("D")
  } else if (num >= 50 && num < 60) {
    console.log("E")
  } else if (num < 50 && num >= 0) {
    console.log("F")
  } else {
    console.log("Not a valid grade.")
  }
}

// console.log(gradeConverter(100))

// 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

function evenNumber(a, b, c) {

  if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// console.log(evenNumber(8, 3, 7));

// 9. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

function oddNumber(a, b, c) {

  if (a % 2 > 0 || b % 2 > 0 || c % 2 > 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// console.log(oddNumber(2, 6, 9));

// 10. Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

function productProfit(cost, sell) {
  let productCostPrice = cost;
  let productSellPrice = sell;
  let taxes = (productCostPrice * 0.2)
  let totalCost = productCostPrice + taxes
  let profit = (productSellPrice * 1000) - (totalCost * 1000);

  if (productCostPrice < 0 || productSellPrice < 0) {
    console.log("Error");
  } else {
    console.log(profit);
  }

}

// productProfit(100, 150);

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function brazilSalaryTaxes(num) {
  let salary = num;
  let inssSalary;
  let salaryAfterTaxes;

  if (salary <= 1556.94 && salary > 0) {
    inssSalary = salary - (salary * 0.08);
  } else if (salary >= 1556.95 && salary <= 2594.92) {
    inssSalary = salary - (salary * 0.09);
  } else if (salary >= 2594.93 && salary <= 5189.82) {
    inssSalary = salary - (salary * 0.11);
  } else if (salary > 5189.82) {
    inssSalary = salary - 570.88;
  } else {
    console.log("Not a valid salary.");
  }

  if (inssSalary <= 1903.98) {
    salaryAfterTaxes = inssSalary
  } else if (inssSalary >= 1903.99 && inssSalary <= 2826.65) {
    salaryAfterTaxes =  inssSalary - ((inssSalary * 0.075) - 142.80);
  } else if (inssSalary >= 2826.66 && inssSalary <= 3751.05) {
    salaryAfterTaxes = inssSalary - ((inssSalary * 0.15) - 354.80);
  } else if (inssSalary >= 3751.05 && inssSalary <= 4664.68) {
    salaryAfterTaxes = inssSalary - ((inssSalary * 0.225) - 636.13);
  } else if (inssSalary >= 4664.68) {
    salaryAfterTaxes = inssSalary - ((inssSalary * 0.275) - 869.36);
  } else { 
    console.log("Not a valid salary");
  }

  console.log(salaryAfterTaxes);
}

// console.log(brazilSalaryTaxes(3000))

