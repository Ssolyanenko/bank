import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { StepperForm } from 'components/_basic';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { Default } from 'components/_basic/StepperForm/StepperForm.stories';

describe('<StepperForm />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      onCloseModal: jest.fn(),
      onOpenFinallyPopup: jest.fn(),
    };
    const wrapper = shallow(
      <Provider store={store}>
        <StepperForm {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render StepperForm from storybook', (): void => {
    const props = {
      onCloseModal: jest.fn(),
      onOpenFinallyPopup: jest.fn(),
    };
    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(StepperForm).length).toBe(1);
  });
});
