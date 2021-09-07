// 6. - Now let's create a new array of objects from the information below, where each object will have the format { name: student's name, average: average grades } . For this we will assume that the position 0 of grades refers to the student in position 0 of students, here besides reduce we will also need to use the map function. Tip: You can access the array index inside map , and you can see the expected object in the expected constant.

const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const test = [9, 8, 23, 6, 32, 5];

function studentAverage() {
  return students.map((x, i) => ({
    name: x,
    average: grades[i].reduce((acc, curr) => acc + curr, 0) / grades[i].length,
  }));
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
