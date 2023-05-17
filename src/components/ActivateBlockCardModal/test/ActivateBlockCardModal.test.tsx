import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { ActivateBlockCardModal } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<LockCardModal />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      title: 'Title text',
      text: 'Text text',
      buttonName: 'Button Name',
      lockChangeHandler: jest.fn(),
      setIsCardBlock: jest.fn(),
    };

    const wrapper = shallow(
      <Provider store={store}>
        <ActivateBlockCardModal activateBlockCardHandler={jest.fn()} terms="test" hasCardStatus={false} {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
