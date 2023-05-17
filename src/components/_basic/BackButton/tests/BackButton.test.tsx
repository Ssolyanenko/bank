import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { BackButton } from 'components/_basic/BackButton';
import { Default } from 'components/_basic/BackButton/BackButton.stories';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<BackButton />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      handleBack: jest.fn(),
      children: 'Back',
    };

    const wrapper = shallow(
      <Provider store={store}>
        <BackButton {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render BackButton from storybook', (): void => {
    const props = {
      handleBack: jest.fn(),
      children: 'Back',
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(BackButton).length).toBe(1);
  });

  test('should invoke callback', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      handleBack: jest.fn(),
      children: 'Back',
    };

    const wrapper = mount(
      <Provider store={store}>
        <BackButton {...props} />
      </Provider>
    );

    wrapper.find('button').simulate('click');
    expect(props.handleBack).toBeCalledTimes(1);
  });

  test('should invoke callback from Storybook', (): void => {
    const props = {
      handleBack: jest.fn(),
      children: 'Back',
    };

    const wrapper = mount(<Default {...props} />);

    wrapper.find(BackButton).simulate('click');
    expect(props.handleBack).toBeCalledTimes(1);
  });
});
