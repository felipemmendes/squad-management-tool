import {
  render,
  fireEvent,
  getByTestId,
  findByTestId,
  getByRole,
} from '../setupTests';
import useFormValues from './useFormValues';

describe('useFormValues hook', () => {
  const TestComponent = ({ initialValues }) => {
    const {
      fieldValues,
      setFieldValues,
      resetFieldValue,
      fieldErrors,
      setFieldErrors,
    } = useFormValues(initialValues);
    return (
      <div>
        <input
          data-testid="email"
          name="email"
          value={fieldValues.email}
          onChange={setFieldValues}
        />
        <button onClick={() => resetFieldValue('email')}>
          test-reset-field
        </button>
        <button onClick={() => setFieldErrors({ email: 'error' })}>
          test-error-field
        </button>
        {fieldErrors.email && (
          <div data-testid="test-email-errors">{fieldErrors.email}</div>
        )}
      </div>
    );
  };

  it('should initialize the form input with a value from the initial state', () => {
    const values = {
      email: 'john@doe.com',
    };

    const { container } = render(<TestComponent initialValues={values} />);

    expect(getByRole(container, 'textbox')).toHaveValue('john@doe.com');
  });

  it('should change the value with onChange event', () => {
    const values = {
      email: '',
    };

    const { container } = render(<TestComponent initialValues={values} />);

    fireEvent.change(getByTestId(container, 'email'), {
      target: {
        value: 'test',
      },
    });

    expect(getByRole(container, 'textbox')).toHaveValue('test');
  });

  it('should reset the field value when resetFieldValue is called', () => {
    const values = {
      email: 'john@doe.com',
    };

    const { container } = render(<TestComponent initialValues={values} />);

    fireEvent.click(
      getByRole(container, 'button', { name: 'test-reset-field' })
    );

    expect(getByRole(container, 'textbox')).toHaveValue('');
  });

  it('should set field errors when setFieldError is called', async () => {
    const values = {
      email: '',
    };

    const { container } = render(<TestComponent initialValues={values} />);

    fireEvent.click(
      getByRole(container, 'button', { name: 'test-error-field' })
    );

    expect(await findByTestId(container, 'test-email-errors')).toBeVisible();
  });
});
