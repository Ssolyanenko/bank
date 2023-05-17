import { shallow } from 'enzyme';

import { SocialMedia } from 'components';

describe('<SocialMedia />', (): void => {
  test('component renders without error', (): void => {
    const wrapper = shallow(<SocialMedia />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
