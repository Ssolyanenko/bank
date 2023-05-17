import React from 'react';
import { shallow } from 'enzyme';

import { CardLimitForm } from 'components';

describe('<CardLimitForm />', (): void => {
  it('should make a snapshot of the component', (): void => {
    const wrapper = shallow(<CardLimitForm />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
