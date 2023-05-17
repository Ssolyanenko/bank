import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';

import { FeaturedServices } from 'components';

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

describe('<FeaturedServices />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(<FeaturedServices />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
