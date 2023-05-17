import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { CloseButton } from 'components/_basic/CloseButton';
import { Default } from 'components/_basic/CloseButton/CloseButton.stories';
import { Size } from 'interfaces/common/componentsSettings';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<CloseButton />', (): void => {
  test('should make a snapshot of component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      onClick: jest.fn(),
      size: Size.MEDIUM,
    };
    const wrapper = shallow(
      <Provider store={store}>
        <CloseButton {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render CloseButton from storybook', (): void => {
    const props = {
      onClick: jest.fn(),
      size: Size.MEDIUM,
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(CloseButton).length).toBe(1);
  });
});
