// 1 - Create a function that returns an object in the format { nameFullName, email } representing a new person hired. Pass your function as a parameter of the HOF newEmployees to create each person hired in its respective id . Your function should receive as parameter the full name of the person employee and from it automatically generate an email in the format nome_da_pessoa@trybe.com.

const createEmployees = (nome) => ({ 
    nome: nome, 
    email: `${nome.toLowerCase().replace(/ /g, '_')}@betrybe.com`,
});

const newEmployees = (action) => ({
    id1: action('Pedro Guerra'),
    id2: action('Luiza Drumond'),
    id3: action('Carla Paiva'),
});

console.log(newEmployees(createEmployees));

// 2 - Create an HOF that returns the result of a prize draw. This HOF will generate a random number between 1 and 5 receiving as parameters the bet number and a function that checks if the bet number is equal to the drawn number. The return of your HOF should be a string (e.g. 'Try again' or 'Congratulations you won').

const checkNumber = (number, randomNum) => {
  return number === randomNum ? 'Parabéns você ganhou' : 'Tente novamente';
}

const prizeDraw = (number, action) => {
  const randomNum = Math.floor(Math.random() * 6);
  return action(number, randomNum);
}

console.log(prizeDraw(5, checkNumber));

// 3 - Create a HOF that will receive three parameters. The first is an array of correct answers (Template), the second is an array of answers to be checked (student's answers) and the third is a function that checks if the answers are correct and counts the final score received by the student. At the end the HOF should return the total number of correct answers.

// When the answer is correct the score goes up 1 point, when it is incorrect it goes down 0.5 points, and when there is no answer ('N.A') the score does not change.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScore = (rightAnswers, studentAnswers, action) => action(rightAnswers, studentAnswers);

const compare = (rightAnswers, studentAnswers) => {
  let count = 0;
  rightAnswers.forEach((element, index) => {
    if (element === studentAnswers[index]) {
      count++;
    } else if (studentAnswers[index] === 'N.A') {
      count += 0;
    } else {
      count += -0.5;
    }
  });
  return count;
}

console.log(checkScore(RIGHT_ANSWERS, STUDENT_ANSWERS, compare));
