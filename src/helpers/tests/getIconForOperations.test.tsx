import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { CardTemplateIcon, PhoneIcon } from 'assets';
import { Operations } from 'constants/operations';
import { getIconForOperations } from 'helpers/getIconForOperations';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('getIconForOperations', () => {
  const store = mockStore(mockInitialState);

  test('should contain icon money transfer card', () => {
    const wrapper = shallow(
      <Provider store={store}>{getIconForOperations(Operations.MONEY_TRANSFER_CARD, '.icon')}</Provider>
    );

    expect(wrapper.contains(<CardTemplateIcon className=".icon" />)).toBeTruthy();
  });

  test('should contain icon money transfer phone', () => {
    const wrapper = shallow(
      <Provider store={store}>{getIconForOperations(Operations.MONEY_TRANSFER_PHONE, '.icon')}</Provider>
    );

    expect(wrapper.contains(<PhoneIcon className=".icon" />)).toBeTruthy();
  });

  test('should return null', () => {
    expect(getIconForOperations('money_transfer_TV', '.icon')).toEqual(null);
  });
});
