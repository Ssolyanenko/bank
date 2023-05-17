import React from 'react';
import { shallow } from 'enzyme';

import { OperationHistory } from 'components';

describe('<OperationHistory />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(<OperationHistory />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
