import { shallow } from 'enzyme';

import { Block } from 'components/_basic';
import { Default } from 'components/_basic/generic/Block/Block.stories';

describe('<Block />', (): void => {
  test('should match the snapshot of the component', (): void => {
    const props = {
      title: 'Title',
      children: <p />,
    };
    const wrapper = shallow(<Block {...props} />);

    const component = wrapper.getElement();
    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot of Block.story', (): void => {
    const props = {
      title: 'Title',
      children: 'Child',
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(Block).length).toBe(1);
  });
});
