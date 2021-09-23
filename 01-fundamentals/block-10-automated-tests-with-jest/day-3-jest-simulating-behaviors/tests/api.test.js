const api = require('../src/api');

// 6 - Create a function that makes a request to the dog pictures api. Mocke the request and create two tests. The first should interpret that the request resolved and take the value "request success". The second should interpret that the request failed and have the value "request failed". Create as many tests as you find necessary.

describe('testing requests', () => {
  api.dogApi = jest.fn();
  afterEach(api.dogApi.mockReset);

  it('testing resolve', async () => {
    api.dogApi.mockResolvedValue('success');

    api.dogApi();
    expect(api.dogApi).toHaveBeenCalled();
    expect(api.dogApi).toHaveBeenCalledTimes(1);
    expect(api.dogApi()).resolves.toBe('success');
  });

  it('testing reject', async () => {
    api.dogApi.mockRejectedValue('fail');

    expect(api.dogApi).toHaveBeenCalledTimes(0);
    expect(api.dogApi()).rejects.toBe('fail');
    expect(api.dogApi).toHaveBeenCalledTimes(1);
  });
});
