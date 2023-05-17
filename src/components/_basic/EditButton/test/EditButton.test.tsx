import React from 'react';
import { shallow } from 'enzyme';

import { EditButton } from 'components/_basic';
import { Default } from 'components/_basic/EditButton/EditButton.stories';
import { Size } from 'interfaces/common/componentsSettings';

describe('<EditButton />', (): void => {
  it('should make a snapshot of component', (): void => {
    const props = {
      onClick: jest.fn(),
      size: Size.MEDIUM,
    };
    const wrapper = shallow(<EditButton {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render EditButton from storybook', (): void => {
    const props = {
      onClick: jest.fn(),
      size: Size.MEDIUM,
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(EditButton).length).toBe(1);
  });
});
