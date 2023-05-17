import { shallow } from 'enzyme';

import { ShareReceiptModal } from 'components';

describe('<ShareReceiptModal />', (): void => {
  test('component renders without error', (): void => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
    };
    const wrapper = shallow(<ShareReceiptModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
