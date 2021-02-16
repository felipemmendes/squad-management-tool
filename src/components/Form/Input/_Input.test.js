import { render, fireEvent, getByRole } from '../../../setupTests';
import Input from './';

describe('input component', () => {
  it('should render a form text input', () => {
    const { container } = render(
      <Input
        label="test-input-label"
        name="test-input-name"
        id="test-input-id"
        type="text"
        value=""
        placeholder="test-input-placeholder"
        onChange={() => {}}
        error=""
      />
    );

    const input = getByRole(container, 'textbox', { name: 'test-input-label' });

    expect(input).toHaveValue('');
    expect(input).toHaveAttribute('placeholder', 'test-input-placeholder');
  });

  it('should call onChange function on input event change and update value', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <Input
        label="test-input-label"
        name="test-input-name"
        id="test-input-id"
        type="text"
        placeholder="test-input-placeholder"
        onChange={mockedHandleChange}
        error=""
      />
    );

    const input = getByRole(container, 'textbox', { name: 'test-input-label' });

    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'test-value' } });

    expect(mockedHandleChange).toHaveBeenCalled();
    expect(input).toHaveValue('test-value');
  });
});
