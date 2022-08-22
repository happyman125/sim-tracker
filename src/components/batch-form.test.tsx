import { shallow } from 'enzyme';

import { BatchForm } from './batch-form';

describe('<BatchForm />', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should render the <BatchForm />', () => {
    const wrapper = shallow(
      <BatchForm />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
