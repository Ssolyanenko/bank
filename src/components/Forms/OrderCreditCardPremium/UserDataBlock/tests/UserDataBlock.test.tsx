import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { UserDataBlock } from 'components';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

describe('<UserDataBlock />', (): void => {
  test('should check a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <UserDataBlock setFieldValue={jest.fn()} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
