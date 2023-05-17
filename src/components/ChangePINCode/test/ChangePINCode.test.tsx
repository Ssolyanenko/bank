import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { ChangePINCode } from 'components';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(jest.fn()),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

describe('<ChangePINCode />', (): void => {
  const store = mockStore(mockInitialState);
  test('should make a snapshot', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <ChangePINCode cardId={13} />
      </Provider>
    );

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
