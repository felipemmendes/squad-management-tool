import {
  render,
  fireEvent,
  getByText,
  getByRole,
  getAllByRole,
} from '../../../test-utils';
import Tags from './';

describe('tags component', () => {
  it('should render a tags box with text input', () => {
    const { container } = render(
      <Tags
        label="test-tags-label"
        id="test-tags-id"
        name="test-tags-name"
        onChange={() => {}}
        value=""
        tagsArr={[]}
        addTag={() => {}}
        deleteTag={() => {}}
        resetField={() => {}}
      />
    );

    const listItems = getAllByRole(container, 'listitem');

    expect(listItems.length).toEqual(1);

    const input = getByRole(container, 'textbox', {
      name: 'test-tags-label',
    });

    expect(input).toHaveValue('');
  });

  it('should call onChange function on input event change and update value', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <Tags
        label="test-tags-label"
        id="test-tags-id"
        name="test-tags-name"
        onChange={mockedHandleChange}
        tagsArr={[]}
        addTag={() => {}}
        deleteTag={() => {}}
        resetField={() => {}}
      />
    );

    const input = getByRole(container, 'textbox', {
      name: 'test-tags-label',
    });

    fireEvent.change(input, { target: { value: 'test-tag' } });
    expect(input).toHaveValue('test-tag');
  });

  it('should call function to add tag to array when pressing enter and call reset input function', async () => {
    const mockedHandleChange = jest.fn();
    const mockedAddTag = jest.fn();
    const mockedResetField = jest.fn();

    const { container } = render(
      <Tags
        label="test-tags-label"
        id="test-tags-id"
        name="test-tags-name"
        onChange={mockedHandleChange}
        tagsArr={[]}
        addTag={mockedAddTag}
        deleteTag={() => {}}
        resetField={mockedResetField}
      />
    );

    const input = getByRole(container, 'textbox', {
      name: 'test-tags-label',
    });

    fireEvent.change(input, { target: { value: 'test-tag-1' } });
    expect(input).toHaveValue('test-tag-1');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockedResetField).toHaveBeenCalledWith('test-tags-name');
    expect(mockedAddTag).toHaveBeenCalledWith('test-tag-1');
  });

  it('should call function to add tag to array when pressing semicolon and call reset input function', async () => {
    const mockedHandleChange = jest.fn();
    const mockedAddTag = jest.fn();
    const mockedResetField = jest.fn();

    const { container } = render(
      <Tags
        label="test-tags-label"
        id="test-tags-id"
        name="test-tags-name"
        onChange={mockedHandleChange}
        tagsArr={[]}
        addTag={mockedAddTag}
        deleteTag={() => {}}
        resetField={mockedResetField}
      />
    );

    const input = getByRole(container, 'textbox', {
      name: 'test-tags-label',
    });

    fireEvent.change(input, { target: { value: 'test-tag-1' } });
    expect(input).toHaveValue('test-tag-1');
    fireEvent.keyDown(input, { key: ';', code: 'Slash' });
    expect(mockedResetField).toHaveBeenCalledWith('test-tags-name');
    expect(mockedAddTag).toHaveBeenCalledWith('test-tag-1');
  });

  it('should call function to remove tag from array when pressing backspace with empty input', async () => {
    const mockedDeleteTag = jest.fn();

    const { container } = render(
      <Tags
        label="test-tags-label"
        id="test-tags-id"
        name="test-tags-name"
        onChange={() => {}}
        tagsArr={['test-tag-1']}
        addTag={() => {}}
        deleteTag={mockedDeleteTag}
        resetField={() => {}}
      />
    );

    const input = getByRole(container, 'textbox', {
      name: 'test-tags-label test-tag-1 delete tag',
    });

    fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });
    expect(mockedDeleteTag).toHaveBeenCalled();

    mockedDeleteTag.mockClear();

    fireEvent.change(input, { target: { value: 'test-tag-2' } });
    fireEvent.keyDown(input, { key: 'Backspace', code: 'Backspace' });
    expect(mockedDeleteTag).not.toHaveBeenCalled();
  });

  it('should call function to remove tag from array when clicking the remove button', async () => {
    const mockedDeleteTag = jest.fn();

    const { container } = render(
      <Tags
        label="test-tags-label"
        id="test-tags-id"
        name="test-tags-name"
        onChange={() => {}}
        tagsArr={['test-tag-1']}
        addTag={() => {}}
        deleteTag={mockedDeleteTag}
        resetField={() => {}}
      />
    );

    const tag = getByText(container, 'test-tag-1');
    const button = getByRole(tag, 'button');

    fireEvent.click(button);
    expect(mockedDeleteTag).toHaveBeenCalled();
  });
});
