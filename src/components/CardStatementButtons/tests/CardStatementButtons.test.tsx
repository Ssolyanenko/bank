import { shallow } from 'enzyme';

import { CardStatementButtons } from 'components';
import { Default } from 'components/CardStatementButtons/CardStatementButtons.stories';

describe('<CardStatementButtons />', (): void => {
  test('component renders without error', (): void => {
    const wrapper = shallow(<CardStatementButtons valueFrom={null} valueTo={null} />);
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render CardStatementButtons from storybook', (): void => {
    const wrapper = shallow(
      <Default valueFrom={new Date('2023-01-05T14:19:04.936Z')} valueTo={new Date('2023-01-07T14:19:04.936Z')} />
    );

    expect(wrapper.find(CardStatementButtons).length).toBe(1);
  });
});
