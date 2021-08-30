const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// 1 - Create a function to add the morning shift in lesson2 . This function must have three parameters, namely: the object to be changed, the key to be added and its value.

const morningShift = (obj, key, value) => (obj[key] = value);

morningShift(lesson2, "turno", "manhã");
console.log(lesson2);

// 2 - Create a function to list the keys of an object. This function should receive an object as a parameter.

const listKeys = (obj) => console.log(Object.keys(obj));

listKeys(lesson3);

// 3 - Create a function to show the size of an object.

const objSize = (obj) => console.log(Object.keys(obj).length);

objSize(lesson1);

// 4 - Create a function to list the values of an object. This function should receive an object as a parameter.

const objValues = (obj) => console.log(Object.values(obj));

objValues(lesson3);

// 5 - Create an object named allLessons , which should group all lessons through Object.assign . Each key of this new object will be a lesson, these keys being: lesson1 , lesson2 and lesson3.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// 6 - Using the object created in exercise 5, create a function that returns the total number of students in all classes.

const studentsNumber = (obj) => {
  let students = 0;
  for (const key in obj) {
    students += allLessons[key].numeroEstudantes;
  }
  return students;
};

console.log(studentsNumber(allLessons));

// 7 - Create a function that gets the value of the key according to its position on the object.

const valueByIndex = (obj, index) => Object.values(obj)[index];

console.log(valueByIndex(lesson1, 0));

// 8 - Create a function that checks whether the pair (key / value) exists in the function. This function must have three parameters: the object, the name of the key, and the value of the key.

const checkKeyValue = (obj, objKey, objValue) => obj[objKey] === objValue;

console.log(checkKeyValue(lesson3, "turno", "Maria Clara"));

// BONUS

// Create a function to count how many students attended the math classes. Use the object created in exercise 5.

const mathStudents = (obj) => {
  let total = 0;
  for (const key in obj) {
    if (obj[key].materia === "Matemática") {
      total += obj[key].numeroEstudantes;
    }
  }
  return total;
};

console.log(mathStudents(allLessons));

// Create a function that should return an object representing the teacher's report, the lessons he or she taught, and the total number of students. Use the object you created in exercise 5:

const teacherReport = (obj, teacher) => {
  const classes = [];
  let students = 0;

  for (const key in obj) {
    if (obj[key].professor === teacher) {
      classes.push(obj[key].materia);
      students += obj[key].numeroEstudantes;
    }
  }

  const report = {
    professor: teacher,
    aulas: classes,
    estudantes: students,
  };
  
  return report;
};

console.log(teacherReport(allLessons, 'Maria Clara'));