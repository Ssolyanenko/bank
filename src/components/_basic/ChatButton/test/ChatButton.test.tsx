import { shallow } from 'enzyme';

import { ChatButton } from 'components/_basic';
import { Default } from 'components/_basic/ChatButton/ChatButton.stories';

describe('<ChatButton />', (): void => {
  test('should make a snapshot of component', (): void => {
    const wrapper = shallow(<ChatButton />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render ChatButton from storybook', (): void => {
    const wrapper = shallow(<Default />);

    expect(wrapper.find(ChatButton).length).toBe(1);
  });
});
