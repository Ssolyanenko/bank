import { shallow } from 'enzyme';

import { InformationBlock } from 'components';
import { Default } from 'components/InformationBlock/InformationBlock.stories';

describe('<InformationBlock />', (): void => {
  const text = 'Test';

  test('InformationBlock should render correct text', (): void => {
    const wrapper = shallow(<InformationBlock>{text}</InformationBlock>);

    expect(wrapper.find('.blockText').text()).toEqual(text);
  });

  test('should render InformationBlock from storybook', (): void => {
    const wrapper = shallow(<Default>{text}</Default>);

    expect(wrapper.find(InformationBlock).length).toBe(1);
  });
});
