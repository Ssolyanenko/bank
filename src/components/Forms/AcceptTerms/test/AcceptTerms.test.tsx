import { shallow } from 'enzyme';

import { AcceptTerms } from 'components';

describe('<AcceptTerms />', (): void => {
  it('should match the snapshot', (): void => {
    const component = shallow(
      <AcceptTerms
        isTermsAgreedClicked={false}
        isAccuracyConfirmedClicked={false}
        setIsTermsAgreedClicked={jest.fn()}
        setIsAccuracyConfirmedClicked={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should apply error class when send button is clicked and accuracy checkbox is not checked', (): void => {
    const component = shallow(
      <AcceptTerms
        isTermsAgreedClicked={false}
        isAccuracyConfirmedClicked={false}
        setIsTermsAgreedClicked={jest.fn()}
        setIsAccuracyConfirmedClicked={jest.fn()}
        isSendButtonClicked={true}
      />
    );
    expect(component.find('.checkboxLabel').at(1).hasClass('checkboxLabelError')).toBe(true);
  });

  it('should apply error class when send button is clicked and terms checkbox is not checked', (): void => {
    const component = shallow(
      <AcceptTerms
        isTermsAgreedClicked={false}
        isAccuracyConfirmedClicked={false}
        setIsTermsAgreedClicked={jest.fn()}
        setIsAccuracyConfirmedClicked={jest.fn()}
        isSendButtonClicked={true}
      />
    );
    expect(component.find('.checkboxLabel').at(0).hasClass('checkboxLabelError')).toBe(true);
  });
});
