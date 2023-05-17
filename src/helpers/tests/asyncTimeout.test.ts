import { asyncTimeout } from 'helpers/asyncTimeout';

describe('asyncTimeout', () => {
  jest.useFakeTimers();

  test(`setTimeout should be called `, () => {
    asyncTimeout(30).then(() => {
      expect(setTimeout).toBeCalled();
    });
  });
});
