import React from 'react';
import { shallow } from 'enzyme';

import { TabTitle } from 'components/_basic';
import { Default } from 'components/_basic/Tabs/TabTitle/TabTitle.stories';

describe('<TabTitle />', (): void => {
  test('should make a snapshot of component', (): void => {
    const props = {
      title: 'tabs',
      index: 1,
      setSelectedTab: jest.fn(),
      selectedTab: 0,
    };
    const wrapper = shallow(<TabTitle {...props} selectedTab={0} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should change selected tab', (): void => {
    const setSelectedTab = jest.fn();
    const index = 1;
    const props = {
      title: 'tabs',
      index: index,
      setSelectedTab: setSelectedTab,
      selectedTab: 0,
    };
    const wrapper = shallow(<TabTitle {...props} />);

    wrapper.find('button').simulate('click');

    expect(setSelectedTab).toHaveBeenCalledWith(index);
  });

  test('should match snapshot of the TabTitle.story', (): void => {
    const props = {
      title: 'tabs',
      index: 1,
      setSelectedTab: jest.fn(),
      selectedTab: 0,
    };

    const wrapper = shallow(<Default {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
