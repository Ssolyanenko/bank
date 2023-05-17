import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { Sidebar } from 'components';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('<Sidebar />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const props = {
      city: 'London',
      handleActiveMarker: jest.fn(),
      setZoom: jest.fn(),
      setNewCity: jest.fn(),
      calculateRoute: jest.fn(),
      setIsOpenMarker: jest.fn(),
      setDirectionsResponse: jest.fn(),
      distance: '100m',
    };
    const wrapper = shallow(
      <Provider store={store}>
        <Sidebar {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
