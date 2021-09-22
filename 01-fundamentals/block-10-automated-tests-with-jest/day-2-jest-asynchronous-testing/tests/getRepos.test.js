const getRepos = require('../src/getRepos');

describe('getRepos tests', () => {
  it('includes "sd-01-week4-5-project-todo-list" and "sd-01-week4-5-project-meme-generator"', async () => {
    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });
});
