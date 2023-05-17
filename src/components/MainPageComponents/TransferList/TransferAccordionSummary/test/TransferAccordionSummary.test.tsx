import { shallow } from 'enzyme';

import { TransferAccordionSummary } from 'components';

describe('<TransferAccordionSummary />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const props = {
      icon: <p />,
      title: 'title',
    };

    const wrapper = shallow(<TransferAccordionSummary {...props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
