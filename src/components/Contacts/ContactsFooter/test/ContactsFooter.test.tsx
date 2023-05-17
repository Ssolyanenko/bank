import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';

import { ContactsFooter } from 'components';

describe('<ContactsFooter />', (): void => {
  test('should make a snapshot of component', (): void => {
    const wrapper = shallow(
      <Router>
        <ContactsFooter />
      </Router>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
