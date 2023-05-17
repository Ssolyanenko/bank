import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import { Pagination } from 'components';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import * as hooks from 'hooks';

jest.mock('hooks', () => {
  return {
    __esModule: true,
    ...jest.requireActual('hooks'),
  };
});

const store = mockStore(mockInitialState);

describe('<Pagination />', (): void => {
  test('should make a snapshot of component', (): void => {
    const wrapper = shallow(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  it('should invoke setEntriesInfo on double left click', (): void => {
    const dispatchMock = jest.fn();
    const useTypedDispatch = jest.spyOn(hooks, 'useTypedDispatch');
    useTypedDispatch.mockImplementation(() => dispatchMock);

    const wrapper = mount(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    wrapper.find('.icon').at(0).simulate('click');
    expect(dispatchMock).toBeCalledTimes(1);
  });

  it('should invoke setEntriesInfo on left click', (): void => {
    const dispatchMock = jest.fn();
    const useTypedDispatch = jest.spyOn(hooks, 'useTypedDispatch');
    useTypedDispatch.mockImplementation(() => dispatchMock);

    const wrapper = mount(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    wrapper.find('.icon').at(2).simulate('click');
    expect(dispatchMock).toBeCalledTimes(1);
  });

  it('should invoke setEntriesInfo on right click', (): void => {
    const dispatchMock = jest.fn();
    const useTypedDispatch = jest.spyOn(hooks, 'useTypedDispatch');
    useTypedDispatch.mockImplementation(() => dispatchMock);

    const wrapper = mount(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    wrapper.find('.icon').at(4).simulate('click');
    expect(dispatchMock).toBeCalledTimes(1);
  });

  it('should invoke setEntriesInfo on double right click', (): void => {
    const dispatchMock = jest.fn();
    const useTypedDispatch = jest.spyOn(hooks, 'useTypedDispatch');
    useTypedDispatch.mockImplementation(() => dispatchMock);

    const wrapper = mount(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    wrapper.find('.icon').at(6).simulate('click');
    expect(dispatchMock).toBeCalledTimes(1);
  });
});
