import { MY_CREDIT_CARDS } from 'constants/cardTemplates';
import { shallow } from 'enzyme';

import { PaymentCards } from 'components';

describe('<PaymentCards />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const props = {
      myCardsList: MY_CREDIT_CARDS,
      handleSelectRadioButton: jest.fn(),
      selectedValue: '',
    };
    const wrapper = shallow(<PaymentCards {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
