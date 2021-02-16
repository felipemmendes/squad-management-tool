import { render, getByTestId, getByRole } from '../../../setupTests';
import Button from './';

describe('button component', () => {
  it('should render a button with icon and link', () => {
    const { container } = render(
      <Button icon={<svg data-testid="svg" />} to="/test-page" />
    );

    expect(getByRole(container, 'button')).toBeVisible();
    expect(getByTestId(container, 'svg')).toBeVisible();
    expect(getByRole(container, 'link')).toHaveAttribute('href', '/test-page');
  });
});
