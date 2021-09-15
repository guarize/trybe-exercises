// 4 - Finally, the Curiosity robot has a send message success rate of 60% due to the fact that the robot is already very busy with other operations. So add to the sendMarsTemperature function another callback that contains the actions to be taken in case of failure.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// creation of the sendMarsTemperature function...
const sendMarsTemperature = (callback, error) => {
  const temp = getMarsTemperature();
  const successRate = Math.random() >= 0.6;
  setTimeout(() => {
    successRate ? callback(temp) : error('Robot is busy')
  }, messageDelay());
};

sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);
