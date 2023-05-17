import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { EUIcon, FlagsIcon, SwissIcon, UKIcon, USIcon } from 'assets';
import { RateAbbreviation } from 'constants/rates';
import { getRateIcon } from 'helpers/getRate';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('getRateIcon', () => {
  const store = mockStore(mockInitialState);

  test('should contain icon USD', () => {
    const wrapper = shallow(<Provider store={store}>{getRateIcon(RateAbbreviation.USD)}</Provider>);

    expect(wrapper.contains(<USIcon />)).toBeTruthy();
  });

  test('should contain icon EUR', () => {
    const wrapper = shallow(<Provider store={store}>{getRateIcon(RateAbbreviation.EUR)}</Provider>);

    expect(wrapper.contains(<EUIcon />)).toBeTruthy();
  });

  test('should contain icon CHF', () => {
    const wrapper = shallow(<Provider store={store}>{getRateIcon(RateAbbreviation.CHF)}</Provider>);

    expect(wrapper.contains(<SwissIcon />)).toBeTruthy();
  });

  test('should contain icon EUR_USD', () => {
    const wrapper = shallow(<Provider store={store}>{getRateIcon(RateAbbreviation.EUR_USD)}</Provider>);

    expect(wrapper.contains(<FlagsIcon />)).toBeTruthy();
  });

  test('should contain icon GBP', () => {
    const wrapper = shallow(<Provider store={store}>{getRateIcon(RateAbbreviation.GBP)}</Provider>);

    expect(wrapper.contains(<UKIcon />)).toBeTruthy();
  });

  test('should return null', () => {
    expect(getRateIcon('POl')).toBe(null);
  });
});
