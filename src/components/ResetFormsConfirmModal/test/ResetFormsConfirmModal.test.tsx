import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';

import { ResetFormsConfirmModal } from 'components';

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

describe('<ResetFormsConfirmModal />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const props = {
      isOpen: true,
      handleClose: jest.fn(),
      handleFormReset: jest.fn(),
    };

    const wrapper = shallow(<ResetFormsConfirmModal {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
