// 3 - Now that you have made the function that sends the temperature of Mars, suppose you can send to the Curiosity robot what you want to do, once you successfully get the temperature on Mars. Then add to the sendMarsTemperature function a callback that contains the actions to be taken on top of the temperature.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// creation of the sendMarsTemperature function...
const sendMarsTemperature1 = (callback) => {
  const temp = getMarsTemperature();
  setTimeout(() => {
    callback(temp);
  }, messageDelay())
}

sendMarsTemperature1(temperatureInFahrenheit);
sendMarsTemperature1(greet);
