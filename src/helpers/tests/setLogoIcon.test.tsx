import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { MasterCardLogoIcon } from 'assets/MasterCardLogoIcon';
import { VisaCardTemplateLogoIcon } from 'assets/VisaCardTemplateLogoIcon';
import { PaymentSystem } from 'constants/paymentSystem';
import { setLogoIcon } from 'helpers/setLogoIcon';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('setLogoIcon', () => {
  const store = mockStore(mockInitialState);

  test('should contain icon master card', () => {
    const wrapper = shallow(<Provider store={store}>{setLogoIcon(PaymentSystem.MASTER_CARD)}</Provider>);

    expect(wrapper.contains(<MasterCardLogoIcon />)).toBeTruthy();
  });

  test('should contain icon visa', () => {
    const wrapper = shallow(<Provider store={store}>{setLogoIcon(PaymentSystem.VISA)}</Provider>);

    expect(wrapper.contains(<VisaCardTemplateLogoIcon />)).toBeTruthy();
  });

  test('should return Unknown type of card', () => {
    expect(setLogoIcon('MIR')).toBe('Unknown type of card');
  });
});
