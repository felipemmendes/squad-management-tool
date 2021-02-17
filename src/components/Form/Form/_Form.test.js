import { render, fireEvent, getByRole } from '../../../test-utils';
import Form from './';

describe('form component', () => {
  it('should render a form pass the props forward to form inputs and groups', () => {
    const mockedHandleChange = jest.fn();

    const { container } = render(
      <Form
        values={{}}
        errors={{}}
        handleChange={mockedHandleChange}
        resetField={() => {}}
        handleSubmit={() => {}}
      >
        <div component="input" name="test-input" label="test-input-label" />
      </Form>
    );

    expect(
      getByRole(container, 'textbox', { name: 'test-input-label' })
    ).toBeVisible();
  });

  it('should call the handleSubmit funcion on submit', () => {
    const mockedhandleSubmit = jest.fn();

    const { container } = render(
      <Form
        values={{}}
        errors={{}}
        handleChange={() => {}}
        resetField={() => {}}
        handleSubmit={mockedhandleSubmit}
      >
        <button type="submit">test-form-submit</button>
      </Form>
    );

    fireEvent.submit(
      getByRole(container, 'button', { name: 'test-form-submit' })
    );

    expect(mockedhandleSubmit).toHaveBeenCalled();
  });
});
