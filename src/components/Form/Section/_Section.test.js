import { render, getByRole } from '../../../setupTests';
import Section from './';

describe('section component', () => {
  it('should render a form section and pass the props forward', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <Section values={{}} errors={{}} handleChange={mockedHandleChange}>
        <div component="input" name="test-input" label="test-input-label" />
      </Section>
    );

    expect(
      getByRole(container, 'textbox', { name: 'test-input-label' })
    ).toBeVisible();
  });
});
