import React from 'react';
import { shallow } from 'enzyme';

import { SelectList } from 'components';

describe('<SelectList />', (): void => {
  test('should make a snapshot', (): void => {
    const props = {
      value: 'USD',
      setValue: jest.fn(),
    };
    const wrapper = shallow(<SelectList {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('change value of the input', (): void => {
    const setFieldMock = jest.fn();
    const props = {
      value: 'USD',
      setValue: setFieldMock,
    };
    const wrapper = shallow(<SelectList {...props} />);
    wrapper.find('.select').simulate('change', { target: { value: 'EUR' } });

    expect(setFieldMock).toHaveBeenCalledWith('EUR');
  });
});
