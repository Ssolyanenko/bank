import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import {
  ConsultationIcon,
  DollarIcon,
  ExoticCurrencyIcon,
  GetIcon,
  InsuranceIcon,
  RampIcon,
  TopOnIcon,
  TopOnWithoutCardIcon,
  TransferIcon,
} from 'assets';
import { IconText } from 'constants/text';
import { getIcon } from 'helpers/getIcon';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('getIcon', () => {
  const store = mockStore(mockInitialState);

  test('should contain icon top up', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.TOP_UP)}</Provider>);

    expect(wrapper.contains(<TopOnIcon />)).toBeTruthy();
  });

  test('should contain icon pandus', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.PANDUS)}</Provider>);

    expect(wrapper.contains(<RampIcon />)).toBeTruthy();
  });

  test('should contain icon cash with drawal', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.CASH_WITH_DRAWAL)}</Provider>);

    expect(wrapper.contains(<GetIcon />)).toBeTruthy();
  });

  test('should contain icon money transfer', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.MONEY_TRANSFER)}</Provider>);

    expect(wrapper.contains(<TransferIcon />)).toBeTruthy();
  });

  test('should contain icon top up without card ', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.TOP_UP_WITHOUT_CARD)}</Provider>);

    expect(wrapper.contains(<TopOnWithoutCardIcon />)).toBeTruthy();
  });

  test('should contain icon currency exchange', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.CURRENCY_EXCHANGE)}</Provider>);

    expect(wrapper.contains(<DollarIcon iconsColor="black" size="22px" />)).toBeTruthy();
  });

  test('should contain icon exotic currency exchange', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.EXOTIC_CURRENCY_EXCHANGE)}</Provider>);

    expect(wrapper.contains(<ExoticCurrencyIcon />)).toBeTruthy();
  });

  test('should contain icon consultation', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.CONSULTATION)}</Provider>);

    expect(wrapper.contains(<ConsultationIcon />)).toBeTruthy();
  });

  test('should contain icon insuranse', () => {
    const wrapper = shallow(<Provider store={store}>{getIcon(IconText.INSURANCE)}</Provider>);

    expect(wrapper.contains(<InsuranceIcon />)).toBeTruthy();
  });

  test('should return null', () => {
    expect(getIcon('hello')).toBe(null);
  });
});
