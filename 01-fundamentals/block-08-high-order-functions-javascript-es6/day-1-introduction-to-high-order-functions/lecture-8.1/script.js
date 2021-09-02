// Exercises

// 1 - Create a function that returns the string 'Waking up!

const wakeUp = () => 'Waking up!';

// 2 - Create another function that returns the string 'Let's have coffee!

const doingSomething = () => 'Let`s have coffee!'

// 3 - Create one more function that returns the string 'Go to sleep!

const sleep = () => 'Go to sleep!';

// 4 - Now create an HOF named doingThings and configure this function so that it prints to the console the result of executing the functions you created in the previous examples.

const doingThings = (action) => action();

console.log(doingThings(sleep));