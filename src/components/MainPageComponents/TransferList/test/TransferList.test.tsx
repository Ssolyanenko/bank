import { shallow } from 'enzyme';

import { TransferList } from 'components';

describe('<TransferList />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const wrapper = shallow(<TransferList />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
