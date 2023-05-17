import 'jsdom-global/register';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { NotFoundPage } from 'pages';
import { RoutingPaths } from 'constants/routingPaths';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: (): ((path: string, options?: { replace?: boolean }) => void) => mockedUsedNavigate,
}));

describe('<NotFoundPage />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should contain title block', (): void => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(wrapper.render().find('.title').text()).toEqual('Page not found');
  });

  test('should contain message block', (): void => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(wrapper.render().find('.message').text()).toEqual(
      'The page you are looking for could have been deleted or never existed.'
    );
  });

  test('should contain primary button', (): void => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(wrapper.render().find('.button').attr('name')).toEqual('primaryButton');
  });

  test('should call callback on click', (): void => {
    const wrapper = mount(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    const button = wrapper.find('button');
    button.simulate('click');
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/${RoutingPaths.MAIN_PAGE_URL}`);
  });

  test('should contain page not found image', (): void => {
    const wrapper = shallow(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );

    expect(wrapper.render().find('img').attr('alt')).toEqual('Page not found error');
  });
});
