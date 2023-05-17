import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { DebitUserBlock } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<DebitUserBlock />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <DebitUserBlock setFieldValue={jest.fn()} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
