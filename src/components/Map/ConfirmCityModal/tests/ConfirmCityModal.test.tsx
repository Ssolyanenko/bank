import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { ConfirmCityModal } from 'components';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<ConfirmCityModal />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      city: 'London',
      closeModal: jest.fn(),
      notConfirmCity: jest.fn(),
    };
    const wrapper = shallow(
      <Provider store={store}>
        <ConfirmCityModal {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
