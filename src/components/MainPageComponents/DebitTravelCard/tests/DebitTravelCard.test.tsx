import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { DebitTravelCard } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<DebitTravelCard />', (): void => {
  test('should make a snapshot component', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <DebitTravelCard />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
