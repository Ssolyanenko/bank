import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { CardProducts } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<CardProducts />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <CardProducts />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
