import { render, getByText, getByRole } from '../../test-utils';
import Header from './';

describe('header component', () => {
  it('should render header with logo, link to dashboard and user info', () => {
    const { container } = render(
      <Header user={{ name: 'John Doe' }} logo="img.svg" text="test-app-name" />
    );

    expect(getByRole(container, 'link')).toHaveAttribute('href', '/');
    expect(
      getByRole(container, 'img', { name: 'test-app-name' })
    ).toBeVisible();
    expect(getByText(container, 'John Doe')).toBeVisible();
    expect(getByText(container, 'JD')).toBeVisible();
  });
});
