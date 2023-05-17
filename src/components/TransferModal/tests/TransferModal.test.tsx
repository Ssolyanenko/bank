import { shallow } from 'enzyme';

import { TransferModal } from 'components';

describe('<Transfer modal />', (): void => {
  test('should render component for successful transfer', (): void => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      isTransferSuccessful: true,
      handleClickShareModal: jest.fn(),
    };
    const wrapper = shallow(<TransferModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render component for failed transfer', (): void => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      isTransferSuccessful: false,
      handleClickShareModal: jest.fn(),
    };
    const wrapper = shallow(<TransferModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
