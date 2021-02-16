import {
  render,
  fireEvent,
  getByRole,
  getAllByRole,
} from '../../../setupTests';
import Select from './';

describe('select component', () => {
  it('should render a form select input with options', () => {
    const { container } = render(
      <Select
        label="test-select-label"
        name="test-select-name"
        id="test-select-id"
        value="test-option-1"
        onChange={() => {}}
        selectOptions={[{ value: 'test-option-1' }, { value: 'test-option-2' }]}
      />
    );

    const select = getByRole(container, 'combobox', {
      name: 'test-select-label',
    });

    expect(select).toHaveValue('test-option-1');

    const [firstOption, secondOption] = getAllByRole(select, 'option');

    expect(firstOption).toHaveValue('test-option-1');
    expect(secondOption).toHaveValue('test-option-2');
  });

  it('should call onChange function on select event change', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <Select
        label="test-select-label"
        name="test-select-name"
        id="test-select-id"
        defaultValue="test-option-1"
        onChange={mockedHandleChange}
        selectOptions={[{ value: 'test-option-1' }, { value: 'test-option-2' }]}
      />
    );

    const select = getByRole(container, 'combobox', {
      name: 'test-select-label',
    });

    expect(select).toHaveValue('test-option-1');

    fireEvent.change(select, { target: { value: 'test-option-2' } });

    expect(mockedHandleChange).toHaveBeenCalled();
    expect(select).toHaveValue('test-option-2');
  });
});
