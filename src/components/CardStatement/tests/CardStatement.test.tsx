import { shallow } from 'enzyme';

import { CardStatement } from 'components';

describe('<CardStatement />', (): void => {
  test('renders without fallout', (): void => {
    const wrapper = shallow(<CardStatement />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
