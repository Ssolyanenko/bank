import React from 'react';
import { shallow } from 'enzyme';

import { CustomRoutes } from 'components/_basic/CustomRoutes';

describe('<CustomRoutes />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      children: <div />,
    };
    const wrapper = shallow(<CustomRoutes {...props} />);

    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
