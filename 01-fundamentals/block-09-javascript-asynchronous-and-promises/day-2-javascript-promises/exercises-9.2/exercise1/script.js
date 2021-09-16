// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeHeader = document.getElementById('jokeContainer');
  const myObject = {
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => jokeHeader.innerText = data.joke);
};

window.onload = () => fetchJoke();
