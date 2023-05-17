import { shallow } from 'enzyme';

import { StatusTag } from 'components/StatusTag';
import { CardApplicationStatusText } from 'interfaces/cardApplications';
import { Default } from 'components/StatusTag/StatusTag.stories';

describe('<StatusTag />', (): void => {
  test('should render with "Under consideration" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.UNDER_CONSIDERATION} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.UNDER_CONSIDERATION);
  });

  test('should render with "Approved" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.APPROVED} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.APPROVED);
  });

  test('should render with "In progress" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.IN_PROGRESS} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.IN_PROGRESS);
  });

  test('should render with "On the way" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.ON_THE_WAY} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.ON_THE_WAY);
  });

  test('should render with "Ready to pick up" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.READY_FOR_PICK_UP} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.READY_FOR_PICK_UP);
  });

  test('should render with "Rejected" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.REJECTED} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.REJECTED);
  });

  test('should render with "Cancelled automatically" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.CANCELLED_AUTOMATICALLY} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.CANCELLED_AUTOMATICALLY);
  });

  test('should render with "Collected" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.COLLECTED} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.COLLECTED);
  });

  test('should render with "Finalized" status', (): void => {
    const wrapper = shallow(<StatusTag status={CardApplicationStatusText.FINALIZED} />);
    expect(wrapper.find('.statusTag').text()).toEqual(CardApplicationStatusText.FINALIZED);
  });

  test('should render StatusTag from storybook', (): void => {
    const wrapper = shallow(<Default status={CardApplicationStatusText.FINALIZED} />);
    expect(wrapper.find(StatusTag).length).toBe(1);
  });
});
