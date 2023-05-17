import React from 'react';
import { shallow } from 'enzyme';

import { DropDownWithCheckbox } from 'components/_basic';
import { Default } from 'components/_basic/DropDownWithCheckbox/DropDownWithCheckbox.stories';

describe('<DropDownWithCheckbox />', (): void => {
  test('should make custom snapshot', (): void => {
    const props = {
      enumerations: [],
      placeholder: '',
      name: '',
      label: '',
      setFieldValue: jest.fn(),
    };
    const wrapper = shallow(<DropDownWithCheckbox {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make snapshot with default props', (): void => {
    const props = {
      enumerations: [],
      name: 'dropDown',
      setFieldValue: jest.fn(),
    };

    const wrapper = shallow(<DropDownWithCheckbox {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render DropDown from storybook', (): void => {
    const props = {
      enumerations: [],
      placeholder: '',
      name: '',
      label: '',
      setFieldValue: jest.fn(),
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(DropDownWithCheckbox).length).toBe(1);
  });
});
