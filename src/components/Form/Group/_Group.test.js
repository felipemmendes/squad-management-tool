import { render, getByRole } from '../../../test-utils';
import Group from './';

describe('group component', () => {
  it('should render a form group and pass the props forward', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <Group values={{}} errors={{}} handleChange={mockedHandleChange}>
        <div component="input" name="test-input" label="test-input-label" />
      </Group>
    );

    expect(
      getByRole(container, 'textbox', { name: 'test-input-label' })
    ).toBeVisible();
  });
});
