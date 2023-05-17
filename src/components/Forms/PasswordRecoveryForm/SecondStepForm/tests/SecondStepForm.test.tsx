import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { SecondStepForm } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<SecondStepForm />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      handleNextStep: jest.fn(),
    };
    const wrapper = shallow(
      <Provider store={store}>
        <SecondStepForm {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
