import { render, getByLabelText, getByRole } from '../../../setupTests';
import Label from './';

describe('label component', () => {
  it('should render a form label', () => {
    const { container } = render(
      <Label label="test-label" htmlFor="test-input-id" hasError={false}>
        <input type="text" id="test-input-id" />
      </Label>
    );

    expect(getByLabelText(container, 'test-label')).toBeVisible();
    expect(
      getByRole(container, 'textbox', { name: 'test-label' })
    ).toBeVisible();
  });
});
