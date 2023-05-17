import { shallow } from 'enzyme';

import { Accordion } from '../Accordion';
import { Default } from 'components/Accordion/Accordion.stories';

describe('<Accordion />', (): void => {
  test('should make a snapshot of the component', (): void => {
    const props = [
      {
        id: 'panel1',
        summary: {
          icon: <div />,
          title: 'title',
        },
        content: <p />,
      },
    ];

    const wrapper = shallow(<Accordion accordionList={props} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render Accordion from storybook', (): void => {
    const props = [
      {
        id: 'panel1',
        summary: {
          icon: <div />,
          title: 'title',
        },
        content: <p />,
      },
    ];
    const wrapper = shallow(<Default accordionList={props} />);

    expect(wrapper.find(Accordion).length).toBe(1);
  });
});
