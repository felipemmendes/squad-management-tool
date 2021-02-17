import { render, fireEvent, getByRole } from '../../../../test-utils';
import RadioInput from './';

describe('radioInput component', () => {
  it('should render a form radio input', () => {
    const { container } = render(
      <RadioInput
        label="test-radio-label"
        name="test-radio-name"
        id="test-radio-id"
        value="test-radio-value"
        onChange={() => {}}
        checked={false}
        hasError={false}
      />
    );

    expect(
      getByRole(container, 'radio', { name: 'test-radio-label' })
    ).toBeVisible();
  });

  it('should call onChange function on event change and check input', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <RadioInput
        label="test-radio-label"
        name="test-radio-name"
        id="test-radio-id"
        onChange={mockedHandleChange}
        onClick={mockedHandleChange}
        checked={false}
        hasError={false}
      />
    );

    const radio = getByRole(container, 'radio', { name: 'test-radio-label' });

    expect(radio).not.toBeChecked();

    fireEvent.click(radio, { target: { checked: true } });

    expect(mockedHandleChange).toHaveBeenCalled();
    expect(radio).toBeChecked();
  });
});
