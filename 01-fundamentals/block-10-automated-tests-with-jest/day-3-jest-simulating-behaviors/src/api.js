const fetch = require('node-fetch');

const dogApi = () => {
  return fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
};

module.exports = dogApi;
