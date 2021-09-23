const api = require('../src/api');

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
