import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { ModalChoosePaymentCard } from 'components';

describe('<ModalChoosePaymentCard />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      selectedValue: '',
      setFieldValue: jest.fn(),
    };
    const wrapper = shallow(
      <Provider store={store}>
        <ModalChoosePaymentCard {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
