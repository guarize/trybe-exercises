let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);

// JavaScript Arithmetic Operators

let base = 5;
let altura = 8;
let area = base * altura;
let perimetro = (base * 2) + (altura * 2);

// console.log(area);
// console.log(perimetro);

// Condições If e Else

function processoSeletivo(nota) {

  if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!");
  } else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
  } else {
    console.log("Você foi reprovada(o)");
  }

}

// console.log(processoSeletivo(100))

// Switch e Case

let state = "aprovada";

switch (state) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

  default: 
    console.log("Não se aplica")
}