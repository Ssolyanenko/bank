import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';

import { DropDownWithSearchBranches } from 'components';
import { Default } from 'components/DropDownWithSearchBranches/DropDownWithSearchBranches.stories';

describe('<DropDownWithSearchBranches />', (): void => {
  let onSearchMock: jest.Mock;
  let props;
  let wrapper: ShallowWrapper<AutocompleteRenderInputParams, Readonly<{}>, React.Component<{}, {}>>;

  beforeEach((): void => {
    onSearchMock = jest.fn();
    props = {
      name: 'dropDown',
      setFieldValue: onSearchMock,
      branches: [],
    };
    wrapper = shallow(<DropDownWithSearchBranches {...props} />);
  });

  test('should make a snapshot component', (): void => {
    const component = wrapper.getElement();

    expect(component).toMatchSnapshot();
  });

  test('should call onChange without arguments', (): void => {
    wrapper.find(Autocomplete).simulate('change', {});

    expect(onSearchMock).toBeCalledWith('dropDown', undefined);
  });

  test('should call onChange with arguments', (): void => {
    wrapper.find(Autocomplete).simulate('change', {}, { id: 0 });

    expect(onSearchMock).toBeCalledWith('dropDown', '0');
  });

  test('should check isOptionEqualToValue', (): void => {
    const isOptionEqualToValue = wrapper.find(Autocomplete).prop('isOptionEqualToValue');

    if (isOptionEqualToValue) expect(isOptionEqualToValue({ address: 'test' }, { address: 'test' })).toBeTruthy();
  });

  test('should check getOptionLabel', (): void => {
    const getOptionLabel = wrapper.find(Autocomplete).prop('getOptionLabel');
    const options = { address: '', number: '' };

    if (getOptionLabel) expect(getOptionLabel(options)).toContain(`${options.address}, ${options.number}`);
  });

  test('should check renderOption with arguments', (): void => {
    const renderOption = wrapper.find(Autocomplete).prop('renderOption');
    const propsDropDown = wrapper.props();

    if (renderOption)
      expect(
        renderOption(propsDropDown, { address: '22 street', number: '1' }, { inputValue: '', selected: true })
      ).toMatchSnapshot();
  });

  test('should check renderOption without arguments', (): void => {
    const renderOption = wrapper.find(Autocomplete).prop('renderOption');
    const propsDropDown = wrapper.props();

    if (renderOption)
      expect(
        renderOption(propsDropDown, { address: '', number: '1' }, { inputValue: '', selected: true })
      ).toMatchSnapshot();
  });

  test('should check renderInput with arguments', (): void => {
    const renderInput = wrapper.find(Autocomplete).prop('renderInput');
    const propsDropDown = wrapper.props();

    if (renderInput) expect(renderInput(propsDropDown)).toMatchSnapshot();
  });
});
