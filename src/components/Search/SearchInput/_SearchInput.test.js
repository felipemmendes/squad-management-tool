import {
  render,
  fireEvent,
  getByRole,
  getByLabelText,
} from '../../../setupTests';
import SearchInput from './';

describe('searchInput component', () => {
  it('should render an input with passed label and name', () => {
    const { container } = render(
      <SearchInput label="test-label" name="test-input" inputId="test-input" />
    );

    expect(getByLabelText(container, 'test-label')).toBeVisible();

    const input = getByRole(container, 'textbox', { name: 'test-label' });

    expect(input).toBeVisible();
    expect(input).toHaveValue('');
  });

  it('should change the input value when on change event triggers', () => {
    const { container } = render(
      <SearchInput label="test-label" name="test-input" inputId="test-input" />
    );

    const input = getByRole(container, 'textbox', { name: 'test-label' });

    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });

    expect(input).toHaveValue('test');
  });
});
