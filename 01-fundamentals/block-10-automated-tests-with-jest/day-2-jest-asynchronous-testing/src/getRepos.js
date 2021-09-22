// 4 - The code below searches GitHub for a user's repositories according to URL and returns a list as the result. Given the URL 'https://api.github.com/orgs/tryber/repos' , do a test that verifies that the repositories 'sd-01-week4-5-project-todo-list' and 'sd-01-week4-5-project-meme-generator' are in this list.

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = getRepos;
