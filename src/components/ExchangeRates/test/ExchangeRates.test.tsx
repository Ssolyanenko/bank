import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { ExchangeRates } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<ExchangeRates />', () => {
  test('should make a snapshot', () => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <ExchangeRates />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
