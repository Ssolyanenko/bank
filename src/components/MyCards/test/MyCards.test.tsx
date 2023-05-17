import 'jsdom-global/register';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router';

import { MyCards } from 'components';
import { MY_CREDIT_CARDS } from 'constants/cardTemplates';

describe('<MyCards />', (): void => {
  it('should make a snapshot', (): void => {
    const wrapper = mount(
      <Router>
        <MyCards myCardsList={MY_CREDIT_CARDS} />
      </Router>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
