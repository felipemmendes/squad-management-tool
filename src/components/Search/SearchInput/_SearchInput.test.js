import {
  render,
  fireEvent,
  getByRole,
  getByLabelText,
} from '../../../test-utils';
import SearchInput from './';

describe('searchInput component', () => {
  it('should render an input with passed label and name', () => {
    const { container } = render(
      <SearchInput
        label="test-label"
        name="test-input"
        inputId="test-input"
        value=""
        onChange={() => {}}
      />
    );

    expect(getByLabelText(container, 'test-label')).toBeVisible();

    const input = getByRole(container, 'searchbox', { name: 'test-label' });

    expect(input).toBeVisible();
    expect(input).toHaveValue('');
  });

  it('should change the input value when on change event triggers', () => {
    const mockedOnChange = jest.fn();

    const { container } = render(
      <SearchInput
        label="test-label"
        name="test-input"
        inputId="test-input"
        onChange={mockedOnChange}
      />
    );

    const input = getByRole(container, 'searchbox', { name: 'test-label' });

    fireEvent.change(input, {
      target: {
        value: 'test',
      },
    });

    expect(input).toHaveValue('test');
  });
});
