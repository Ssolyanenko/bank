import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { MenuItem, Select } from '@mui/material';

import { DropDown } from 'components/_basic';
import { Default } from 'components/_basic/DropDown/DropDown.stories';

describe('<DropDown />', (): void => {
  let wrapper: ShallowWrapper;
  let onSearchMock: jest.Mock;
  let component: React.ReactElement;
  let props;

  beforeEach((): void => {
    props = {
      name: 'dropDown',
      onChange: jest.fn(),
      enumerations: [{ id: 1, text: 'test' }],
      placeholder: '',
    };

    wrapper = shallow(<DropDown {...props} />);
    onSearchMock = jest.fn();
    component = wrapper.getElement();
  });

  test('should make custom snapshot', (): void => {
    expect(component).toMatchSnapshot();
  });

  test('should check snapshot DropDown MenuItem with initial state', (): void => {
    const item = wrapper.find(MenuItem).prop('className');

    expect(item).toBe('dropDownItem');
  });

  test('should check snapshot DropDown MenuItem with initial state', (): void => {
    props = {
      name: 'dropDown',
      onChange: jest.fn(),
      enumerations: [{ id: 1, text: 'test' }],
      placeholder: '',
      hasLastChild: true,
    };
    wrapper = shallow(<DropDown {...props} />);

    const item = wrapper.find(MenuItem).prop('className');

    expect(item).toBe('dropDownItemLastChild');
  });

  test('should check renderValue with selected item', (): void => {
    const renderValue = wrapper.find(Select).prop('renderValue');

    if (renderValue) expect(renderValue({ length: 1 })).toMatchSnapshot();
  });

  test('should check renderValue without selected item', (): void => {
    const renderValue = wrapper.find(Select).prop('renderValue');

    if (renderValue) expect(renderValue({ length: 0 })).toMatchSnapshot();
  });

  test('should render DropDown from storybook', (): void => {
    props = {
      name: 'dropDown',
      onChange: jest.fn(),
      enumerations: [{ id: 1, text: 'test' }],
      placeholder: '',
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(DropDown).length).toBe(1);
  });
});
