import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { DebitCards } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<DebitCards />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <DebitCards />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
