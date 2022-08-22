import { shallow } from 'enzyme';

import { SimForm } from './sim-form';

const sim = {
  id: 1,
  iccid: '89148000004419075844',
  imsi: '334140948983980',
  isActive: false,
  batchId: 1,
  createdAt: '2017-07-07T00:00:00Z',
  updatedAt: '2017-07-07T00:00:00Z',
}

describe('<SimForm />', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should render the <SimForm />', () => {
    const wrapper = shallow(
      <SimForm data={sim} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
