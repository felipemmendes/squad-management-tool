import { render, fireEvent, getByTestId } from '@testing-library/react';
import useFormValues from './useFormValues';

describe('useFormValues hook', () => {
  const TestComponent = ({ initialValues }) => {
    const { fieldValues, setFieldValues, resetFieldValue } = useFormValues(
      initialValues
    );
    return (
      <input
        data-testid="email"
        name="email"
        value={fieldValues.email}
        onChange={setFieldValues}
        onBlur={() => resetFieldValue('email')}
      />
    );
  };

  it('should initialize the form input with a value from the initial state', () => {
    const values = {
      email: 'john@doe.com',
    };

    const { container } = render(<TestComponent initialValues={values} />);

    expect(container.firstChild).toHaveValue('john@doe.com');
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

    expect(container.firstChild).toHaveValue('test');
  });

  it('should reset the field value when resetFieldValue is called', () => {
    const values = {
      email: 'john@doe.com',
    };

    const { container } = render(<TestComponent initialValues={values} />);

    fireEvent.blur(getByTestId(container, 'email'));

    expect(container.firstChild).toHaveValue('');
  });
});
