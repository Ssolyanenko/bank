import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { Menu } from 'components';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<Menu />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <Menu />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
