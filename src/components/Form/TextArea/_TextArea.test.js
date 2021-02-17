import { render, fireEvent, getByRole } from '../../../test-utils';
import TextArea from './';

describe('textarea component', () => {
  it('should render a form textarea input', () => {
    const { container } = render(
      <TextArea
        label="test-textarea-label"
        name="test-textarea-name"
        id="test-textarea-id"
        onChange={() => {}}
        error=""
      />
    );

    const textarea = getByRole(container, 'textbox', {
      name: 'test-textarea-label',
    });

    expect(textarea).toHaveValue('');
  });

  it('should call onChange function on textarea event change and update value', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <TextArea
        label="test-textarea-label"
        name="test-textarea-name"
        id="test-textarea-id"
        onChange={mockedHandleChange}
        error=""
      />
    );

    const textarea = getByRole(container, 'textbox', {
      name: 'test-textarea-label',
    });

    expect(textarea).toHaveValue('');

    fireEvent.change(textarea, { target: { value: 'test-value' } });

    expect(mockedHandleChange).toHaveBeenCalled();
    expect(textarea).toHaveValue('test-value');
  });
});
