import { render, getByRole, getAllByRole } from '../../../test-utils';
import Radio from './';

describe('radio component', () => {
  it('should render a form radio input group', () => {
    const { container } = render(
      <Radio
        name="test-radio-group"
        label="test-radio-group"
        radioOptions={[
          {
            id: 1,
            value: 'test-radio-1',
            label: 'test-radio-1',
          },
          {
            id: 2,
            value: 'test-radio-2',
            label: 'test-radio-2',
          },
        ]}
        checked="test-radio-1"
        onChange={() => {}}
        error={{}}
      />
    );

    const fieldset = getByRole(container, 'group');

    expect(fieldset).toHaveTextContent('test-radio-group');

    const [firstRadio, secondRadio] = getAllByRole(fieldset, 'radio');

    expect(firstRadio).toBeChecked();
    expect(secondRadio).not.toBeChecked();
  });
});
