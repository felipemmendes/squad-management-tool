import { render, getByRole, getByText } from '../../setupTests';
import Card from './';

describe('card component', () => {
  it('should render a card with title and content without a button', () => {
    expect.assertions(2);

    const { container } = render(
      <Card title="test-card">
        <div>test-text</div>
      </Card>
    );

    expect(getByRole(container, 'heading')).toHaveTextContent('test-card');
    expect(getByText(container, 'test-text')).toBeVisible();
  });

  it('should render a card with a button', () => {
    const { container } = render(
      <Card title="test-card" button={<button>test-button</button>}>
        <div>test-text</div>
      </Card>
    );

    expect(getByRole(container, 'heading')).toHaveTextContent('test-card');
    expect(getByText(container, 'test-text')).toBeVisible();
    expect(getByRole(container, 'button')).toHaveTextContent('test-button');
  });
});
