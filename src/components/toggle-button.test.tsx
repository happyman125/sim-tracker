import { shallow } from 'enzyme';

import { ToggleButton } from './toggle-button';

describe('<ToggleButton />', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should render the <ToggleButton />', () => {
    const wrapper = shallow(
      <ToggleButton label="This is a toggle button" onValueChange={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});