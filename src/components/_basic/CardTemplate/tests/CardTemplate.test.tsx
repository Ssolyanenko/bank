import { shallow } from 'enzyme';

import { CardTemplate } from 'components/_basic';
import { CardTemplate as CardTemplateProps } from 'interfaces/cardTemplate';
import { Default } from 'components/_basic/CardTemplate/CardTemplate.stories';

describe('<CardTemplate />', (): void => {
  const props: CardTemplateProps = {
    id: 1,
    cardNumber: '1',
    cardProductName: 'Debit Travel card',
    formattedAmount: '1000',
    currency: 'GBP',
    cardDate: '12/24',
    paymentSystem: 'visa',
  };

  test('should make a snapshot of component', (): void => {
    const wrapper = shallow(<CardTemplate {...props} />);

    expect(wrapper.getElement()).toMatchSnapshot();
  });

  test('should render CardTemplate from storybook', (): void => {
    const wrapper = shallow(<Default {...props} cardDateStoryBook={1663707600000} />);

    expect(wrapper.find(CardTemplate).length).toBe(1);
  });
});
