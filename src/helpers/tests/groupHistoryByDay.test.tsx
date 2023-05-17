import { MOCK_HISTORY_DATA } from 'constants/historyData';
import { groupHistoryByDay } from 'helpers/groupHistoryByDay';

describe('groupHistoryByDay', () => {
  test('should return group history', () => {
    expect(groupHistoryByDay(MOCK_HISTORY_DATA)).toStrictEqual({
      'June 29, Wednesday': [
        { date: '29.05.2022', place: 'Market', summary: '-5000.00', time: '12:06', typeTransfer: 'TRANSFER' },
        { date: '29.05.2022', place: 'Market', summary: '-5000.70', time: '12:06', typeTransfer: 'TRANSFER' },
      ],
    });
  });
});
