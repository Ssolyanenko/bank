import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { ThirdStepForm } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<ThirdStepForm />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      handleSubmit: jest.fn(),
      onOpenFinallyPopup: jest.fn(),
      onCloseModal: jest.fn(),
    };
    const wrapper = shallow(
      <Provider store={store}>
        <ThirdStepForm {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
