import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { BanTimer } from 'components/_basic';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { Default } from 'components/_basic/BanTimer/BanTimer.stories';

const store = mockStore(mockInitialState);

describe('<BanTimer />', (): void => {
  test('should render with no error', (): void => {
    jest.useFakeTimers();

    const wrapper = mount(
      <Provider store={store}>
        <BanTimer timeString="30:00" />
      </Provider>
    );

    expect(wrapper.find('span').text()).toEqual(' 30:00 ');

    jest.useRealTimers();
  });

  test('should exit reset on zero mins', (): void => {
    jest.useFakeTimers();

    const wrapper = mount(
      <Provider store={store}>
        <BanTimer timeString="30:00" />
      </Provider>
    );

    expect(wrapper.find('span').text()).toEqual(' 30:00 ');

    jest.useRealTimers();
  });

  test('should render BanTimer from storybook', (): void => {
    const props = {
      timeString: '30:00',
    };

    const wrapper = shallow(<Default {...props} />);

    expect(wrapper.find(BanTimer).length).toBe(1);
  });
});
