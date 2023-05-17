import { shallow } from 'enzyme';
import { DesktopDatePicker } from '@mui/x-date-pickers';

import { DatePicker } from 'components/_basic';
import { Default } from 'components/_basic/DatePicker/DatePicker.stories';

describe('<DatePicker />', (): void => {
  test('should render date DatePicker from storybook', (): void => {
    const wrapper = shallow(
      <Default date={new Date('2023-01-05T14:19:04.936Z')} setDate={jest.fn()} label="Test DatePicker" />
    );

    expect(wrapper.find(DatePicker).length).toBe(1);
  });

  test('component renders without error', (): void => {
    const wrapper = shallow(
      <DatePicker date={new Date('2023-01-05T14:19:04.936Z')} setDate={jest.fn()} label="Test DatePicker" />
    );

    expect(wrapper.find(DesktopDatePicker).length).toBe(1);
  });

  test('should render date DatePicker from storybook', (): void => {
    const wrapper = shallow(
      <Default date={new Date('2023-01-05T14:19:04.936Z')} setDate={jest.fn()} label="Test DatePicker" />
    );

    expect(wrapper.find(DatePicker).length).toBe(1);
  });
});
