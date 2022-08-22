import { shallow } from 'enzyme';

import { Modal } from './modal';

describe('<Modal />', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test('should render the <Modal />', () => {
    const wrapper = shallow(
      <Modal open={true}>
        <div>This is a modal</div>
      </Modal>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
