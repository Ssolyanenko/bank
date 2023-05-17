import { shallow } from 'enzyme';

import { ReceiptButtons } from 'components';

describe('<ReceiptButtons />', (): void => {
  test('component renders without error', (): void => {
    const props = {
      handleClickShareModal: jest.fn(),
    };
    const wrapper = shallow(<ReceiptButtons {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
