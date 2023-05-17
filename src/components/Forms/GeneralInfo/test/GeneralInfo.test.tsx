import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { GeneralInfo } from 'components';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<GeneralInfo />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <GeneralInfo />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
