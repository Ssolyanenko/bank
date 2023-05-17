import React from 'react';
import { shallow } from 'enzyme';

import { DropDownLink } from 'components';
import { RoutingPaths } from 'constants/routingPaths';

describe('<DropDownLink />', (): void => {
  test('should make a snapshot', (): void => {
    const wrapper = shallow(
      <DropDownLink
        dropdownList={[
          { title: 'My loans', path: RoutingPaths.MY_LOANS },
          { title: 'Loan products', path: RoutingPaths.LOAN_PRODUCTS },
          { title: 'Apply for a loan', path: RoutingPaths.APPLY_LOAN },
        ]}
      />
    );
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });
});
