import { cardLimitMask, pinCodeMask } from 'helpers';

describe('cardLimitMask', (): void => {
  test('should exclude letters', (): void => {
    expect(cardLimitMask('some1 text2')).toEqual('12');
  });

  test('should add comma separators', (): void => {
    expect(cardLimitMask('1111')).toEqual('1,111');
  });

  test('should should exclude letters and add comma separator', (): void => {
    expect(cardLimitMask('som1 t3ext 4with lette8s')).toEqual('1,348');
  });
});

describe('pinCodeMask', (): void => {
  test('should return only first four characters', (): void => {
    expect(pinCodeMask('1a2a3c6v')).toEqual('1a2a');
  });
});
