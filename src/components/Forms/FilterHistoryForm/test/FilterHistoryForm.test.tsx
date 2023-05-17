import 'jsdom-global/register';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';

import * as GetRequestService from 'services/getRequest';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';
import { FilterHistoryForm } from 'components';
import { TRANSACTIONS_MAX_AMOUNT } from 'constants/requestUrls';
import { DEFAULT_FILTERS_VALUES } from 'constants/transactionsHistory';

const mockSetOpenedFilter = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState: true) => [initialState, mockSetOpenedFilter],
}));

const store = mockStore(mockInitialState);

describe('<FilterHistoryForm />', (): void => {
  it('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <FilterHistoryForm titleFilter="" filters={DEFAULT_FILTERS_VALUES} setFilters={jest.fn()} userCardId={1} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  it('should open and close filter on Filter icon click', (): void => {
    const wrapper = mount(
      <Provider store={store}>
        <FilterHistoryForm titleFilter="" filters={DEFAULT_FILTERS_VALUES} setFilters={jest.fn()} userCardId={1} />
      </Provider>
    );
    const filterIcon = wrapper.find('.iconFilter');
    filterIcon.simulate('click');

    expect(mockSetOpenedFilter).toHaveBeenCalled();
  });

  it('should make request on Filter icon click', (): void => {
    const maxAmountSpy = jest
      .spyOn(GetRequestService, 'GetRequest')
      .mockResolvedValue({ value: 1_000, formatted: '1,000.00' });

    mount(
      <Provider store={store}>
        <FilterHistoryForm titleFilter="" filters={DEFAULT_FILTERS_VALUES} setFilters={jest.fn()} userCardId={1} />
      </Provider>
    );

    expect(maxAmountSpy).toHaveBeenCalledWith(`${TRANSACTIONS_MAX_AMOUNT}?userCardId=${1}`);
  });
});
