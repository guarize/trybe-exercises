// 10. Use the parameter variable as a parameter to the function below, write tests to verify that it is returning as seen in the result variable, and if not, change the code so that it passes the tests.

const assert = require('assert');

const greetPeople = (people) => {
  let greeting = [];

  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const expected = greetPeople(['Irina', 'Ashleigh', 'Elsa']);
assert.deepStrictEqual(expected, result)
