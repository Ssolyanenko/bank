import { shallow } from 'enzyme';

import { ArrowsBlock } from 'components';

describe('<ArrowsBlock />', (): void => {
  test('should match a shapshot of the component', (): void => {
    const wrapper = shallow(<ArrowsBlock />);

    const component = wrapper.getElement();
    expect(component).toMatchSnapshot();
  });
});
