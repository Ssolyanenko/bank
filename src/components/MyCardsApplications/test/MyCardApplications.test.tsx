import { shallow } from 'enzyme';

import { CARD_APPLICATIONS } from 'constants/cardApplications';
import { MyCardApplications } from 'components';

describe('<MyCardApplications />', (): void => {
  test('should make a snapshot with Card Applications', (): void => {
    const wrapper = shallow(<MyCardApplications cardApplicationsList={CARD_APPLICATIONS} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should make a snapshot without Card Applications', (): void => {
    const wrapper = shallow(<MyCardApplications cardApplicationsList={[]} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
