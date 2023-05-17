import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';

import * as GetRequestService from 'services/getRequest';
import { CardHistory } from 'components';
import { CARD_HISTORY_MOCK } from 'constants/mockCardHistory';
import { mockStore } from 'helpers';
import { mockInitialState } from 'constants/mockInitialState';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

jest.mock('formik');

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(jest.fn()),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn(),
  },
}));

const store = mockStore(mockInitialState);

describe('<CardHistory />', (): void => {
  test('should make a snapshot of component', (): void => {
    jest.spyOn(React, 'useState').mockImplementation(() => [[], jest.fn()]);

    const wrapper = shallow(
      <Provider store={store}>
        <CardHistory userCardId={1} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  it('should make request on render', async (): Promise<void> => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(React, 'useState').mockImplementation(() => [[], jest.fn()]);
    const maxAmountSpy = jest.spyOn(GetRequestService, 'GetRequest').mockResolvedValue(CARD_HISTORY_MOCK);

    mount(
      <Provider store={store}>
        <CardHistory userCardId={1} />
      </Provider>
    );

    expect(maxAmountSpy).toHaveBeenCalled();
  });

  it('should catch error on bad request', async (): Promise<void> => {
    const setStateMock = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [[], setStateMock]);
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    jest.spyOn(GetRequestService, 'GetRequest').mockRejectedValue({ message: 'Error' });

    mount(
      <Provider store={store}>
        <CardHistory userCardId={1} />
      </Provider>
    );

    expect(setStateMock).toHaveBeenCalledWith([]);
  });
});
