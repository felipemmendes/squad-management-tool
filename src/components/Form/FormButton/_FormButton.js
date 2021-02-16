import { render, getByRole } from '../../../setupTests';
import FormButton from './';

describe('formButton component', () => {
  it('should render a button with its children', () => {
    const { container } = render(
      <FormButton type="submit">test-button-text</FormButton>
    );

    expect(getByRole(container, 'button')).toHaveTextContent(
      'test-button-text'
    );
  });
});
