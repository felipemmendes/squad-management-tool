import { render, getByText } from '../../test-utils';
import Footer from './';

describe('footer component', () => {
  it('should render footer with passed text', async () => {
    const { container } = render(<Footer footerText="test-footer" />);

    expect(getByText(container, 'test-footer')).toBeVisible();
  });
});
