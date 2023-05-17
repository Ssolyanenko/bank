import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { SecureWrapper } from 'pages';
import { fakeSessionStorage } from 'helpers/fakeSessionStorage';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

Object.defineProperty(global, 'sessionStorage', {
  value: fakeSessionStorage(),
});

describe('<SecureWrapper />', () => {
  test(' should render the children when accessToken is true ', () => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <SecureWrapper>
          <div className="someClass">some content</div>
        </SecureWrapper>
      </Provider>
    );
    expect(wrapper.find('.someClass').length).toEqual(1);
  });
});
