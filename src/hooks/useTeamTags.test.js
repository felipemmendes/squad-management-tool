import { render, fireEvent, getByRole, getAllByRole } from '../test-utils';
import useTeamTags from './useTeamTags';

describe('useTeamTags hook', () => {
  const TestComponent = ({ initialValues }) => {
    const { tags, handleAddTag, handleDeleteTag } = useTeamTags(initialValues);
    return (
      <div>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <button onClick={() => handleAddTag('test-tag-added')}>
          add-tag-test
        </button>
        <button onClick={() => handleDeleteTag('test-tag-removed')}>
          delete-specific-tag-test
        </button>
        <button onClick={() => handleDeleteTag()}>delete-last-tag-test</button>
      </div>
    );
  };

  it('should initialize the component with a value from the initial state', () => {
    const values = ['test-tag-1'];

    const { container } = render(<TestComponent initialValues={values} />);

    expect(getByRole(container, 'listitem')).toHaveTextContent('test-tag-1');
  });

  it('should add the tag passed as a parameter to handleAddTag', () => {
    const values = ['test-tag-1'];

    const { container } = render(<TestComponent initialValues={values} />);

    const listItems = getAllByRole(container, 'listitem');
    expect(listItems.length).toEqual(1);

    fireEvent.click(getByRole(container, 'button', { name: 'add-tag-test' }));

    const newListItems = getAllByRole(container, 'listitem');
    expect(newListItems.length).toEqual(2);

    expect(container).toHaveTextContent('test-tag-added');
  });

  it('should delete the tag passad as a parameter to handleRemoveTag', () => {
    const values = ['test-tag-1', 'test-tag-removed'];

    const { container } = render(<TestComponent initialValues={values} />);

    const listItems = getAllByRole(container, 'listitem');
    expect(listItems.length).toEqual(2);

    fireEvent.click(
      getByRole(container, 'button', { name: 'delete-specific-tag-test' })
    );

    const newListItems = getAllByRole(container, 'listitem');
    expect(newListItems.length).toEqual(1);

    expect(container).not.toHaveTextContent('test-tag-removed');
  });

  it('should delete the last tag when handleRemoveTag is called without a parameter', () => {
    const values = ['test-tag-1', 'test-tag-removed'];

    const { container } = render(<TestComponent initialValues={values} />);

    const listItems = getAllByRole(container, 'listitem');
    expect(listItems.length).toEqual(2);

    fireEvent.click(
      getByRole(container, 'button', { name: 'delete-last-tag-test' })
    );

    const newListItems = getAllByRole(container, 'listitem');
    expect(newListItems.length).toEqual(1);

    expect(container).not.toHaveTextContent('test-tag-removed');
  });
});
