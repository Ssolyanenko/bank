import React from 'react';
import { shallow } from 'enzyme';

import { Tabs } from 'components/_basic';
import { GeneralInfo } from 'components';

describe('<Tabs />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      children: [
        <div title="General Info" key="123">
          <GeneralInfo />
        </div>,
      ],
    };
    const wrapper = shallow(<Tabs {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('test when children is empty', (): void => {
    const props = {
      children: [],
    };
    const wrapper = shallow(<Tabs {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
