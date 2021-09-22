const { users, findUserById, getUserName } = require('../src/getUserName');

describe('Using promise syntax', () => {
  it('getUserName with ID 1 returns Mark', () => {
    getUserName(1).then((data) => expect(data).toBe('Mark'));
  });

  it('returns an error when id is not found', () => {
    expect.assertions(1);
    return getUserName(3).catch((error) =>
      expect(error.message).toBe('User with 3 not found.')
    );
  });
});

describe('Using async/await', () => {
  it('getUserName with ID 2 returns Paul', async () => {
    const result = await getUserName(1);
    expect(result).toBe('Mark');
  });

  it('returns an error', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error.message).toBe('User with 3 not found.');
    }
  });
});
