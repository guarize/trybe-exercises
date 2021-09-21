// Consider the data below. You should create a function that receives two parameters: the employee id and the available information about the employee ( firstName , lastName , specialties ). You should also create the tests for this function. Your function should then return the results of the search for the id for that employee and the information queried. If the id is not in the employee table, your function should return the error "ID not identified" . If the information you want to access does not exist, your function should return the error "Information unavailable".

const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const employeeInfo = (id, info) => {
  const employee = professionalBoard.find((emp) => emp.id === id);

  if (!employee) throw new Error('ID not identified');

  if (!employee[info]) throw new Error('Information unavailable');

  return employee[info];
};

// console.log(employeeInfo('23151', 'lastName'));

module.exports = employeeInfo;
