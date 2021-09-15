// 2 - Assume that you need to simulate a message sent from the Curiosity robot from Mars to Earth. Curiosity sends to Earth the current temperature on Mars, taking a variable time of up to 5 seconds to finish sending. Create a function sendMarsTemperature , which prints the temperature on Mars.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// create the sendMarsTemperature function below
const sendMarsTemperature = (temperature, delay) => {
  setTimeout(() => {
    console.log(`Mars temperature is: ${temperature()} degrees Celsius`);
  }, delay())
}

sendMarsTemperature(getMarsTemperature, messageDelay);
