import React from 'react';
import { shallow } from 'enzyme';

import { ContactsInformation } from 'components';
import { FOOTER } from 'constants/contacts';

describe('<ContactsInformation />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      location: FOOTER,
    };
    const wrapper = shallow(<ContactsInformation {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot of not footer component', (): void => {
    const props = {
      location: 'component',
    };
    const wrapper = shallow(<ContactsInformation {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
