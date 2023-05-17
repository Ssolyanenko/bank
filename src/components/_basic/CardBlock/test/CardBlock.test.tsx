import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { CardBlock } from 'components/_basic';
import { mockInitialState } from 'constants/mockInitialState';
import { mockStore } from 'helpers';
import { BlockForDebitSmart } from 'components/_basic/CardBlock/CardBlock.stories';
import { ButtonNames } from 'constants/text';
import { CardName } from 'interfaces/cardTemplate';

const props = {
  id: 1,
  paymentSystem: '',
  cardProductName: '' as CardName,
  amount: 0,
  cardDate: '',
  productInfo: '',
  cardNumber: '',
  cvv: '',
  hasButton: false,
  buttonText: ButtonNames.ORDER_CARD,
  isCircle: false,
  onClick: (): void => {},
};

describe('<CardBlock />', (): void => {
  test('should make a snapshot', (): void => {
    const store = mockStore(mockInitialState);
    const wrapper = shallow(
      <Provider store={store}>
        <BlockForDebitSmart cardDateStoryBook={0} {...props} />
      </Provider>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should render CardBlock from storybook', (): void => {
    const wrapper = shallow(<BlockForDebitSmart cardDateStoryBook={0} {...props} />);

    expect(wrapper.find(CardBlock).length).toBe(1);
  });
});
