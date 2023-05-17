import { Provider } from 'react-redux';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { getStepContent } from 'helpers/getStep';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';

describe('getStepContent', () => {
  const store = mockStore(mockInitialState);

  test('should render form step 1', () => {
    const wrapper = render(
      <Provider store={store}>
        <MemoryRouter>{getStepContent(0, jest.fn(), jest.fn())}</MemoryRouter>
      </Provider>
    );

    expect(wrapper.text()).toContain('ID number');
  });

  test('should render form step 2', () => {
    const wrapper = render(<Provider store={store}>{getStepContent(1, jest.fn(), jest.fn())}</Provider>);

    expect(wrapper.text()).toContain('We sent SMS with a 4-digit verification code to');
  });

  test('should render form step 3', () => {
    const wrapper = render(<Provider store={store}>{getStepContent(2, jest.fn(), jest.fn())}</Provider>);

    expect(wrapper.text()).toContain('New password');
  });

  test('should render form step 4', () => {
    const wrapper = render(<Provider store={store}>{getStepContent(3, jest.fn(), jest.fn())}</Provider>);

    expect(wrapper.text()).toContain('');
  });
});
