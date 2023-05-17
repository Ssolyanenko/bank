import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { getIconHistory } from 'helpers/getIconHistory';
import { BLACK } from 'constants/colors';
import { OtherPaymentIcon, PaymentIcon, TransferIcon } from 'assets';
import { HistoryTypes } from 'constants/historyTypes';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('getIconHistory', (): void => {
  const store = mockStore(mockInitialState);

  test('should contain icon PayIcon', (): void => {
    const wrapper = shallow(<Provider store={store}>{getIconHistory(HistoryTypes.PAYMENT, BLACK)}</Provider>);

    expect(wrapper.contains(<PaymentIcon color={BLACK} />)).toBeTruthy();
  });

  test('should contain icon TransferPayIcon', (): void => {
    const wrapper = shallow(<Provider store={store}>{getIconHistory(HistoryTypes.TRANSFER, BLACK)}</Provider>);

    expect(wrapper.contains(<TransferIcon color={BLACK} />)).toBeTruthy();
  });

  test('should return null in default case', (): void => {
    expect(getIconHistory(HistoryTypes.OTHER, BLACK)).toBeNull();
  });
});
