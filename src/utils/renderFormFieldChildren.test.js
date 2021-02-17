import { render, getByRole, getByTestId } from '../test-utils';
import { renderFormFieldChildren } from './renderFormFieldChildren';

describe('renderFormFieldChildren util', () => {
  it('should return the right elements for each div', () => {
    const mockedHandleChange = jest.fn();
    const mockedResetField = jest.fn();

    const values = {
      input: '',
      textarea: '',
      select: '1 - 1',
      radio: '',
      tagsInput: '',
      tags: [],
      formation: '',
    };

    const component = (
      <div component="group">
        <div component="section">
          <div component="input" name="input" label="input" />
          <div component="textarea" name="textarea" label="textarea" />
          <div
            component="select"
            name="select"
            label="select"
            selectOptions={[
              {
                id: 1,
                value: '1 - 1 - 1 - 1',
              },
            ]}
          />
          <div
            component="radio"
            name="radio"
            label="radio"
            radioOptions={[
              {
                id: 1,
                label: 'test-radio-option',
                value: 'test-radio-option-value',
              },
            ]}
          />
          <div
            component="tags"
            name="tagsInput"
            label="tagsInput"
            tagsArr={[]}
          />
          <div component="formation" name="formation" playersFor="select" />
          <div data-testid="unchanged-div">No change in this div</div>
        </div>
      </div>
    );

    const { container } = render(
      renderFormFieldChildren({
        children: component,
        values,
        errors: {},
        handleChange: mockedHandleChange,
        resetField: mockedResetField,
      })
    );

    expect(getByRole(container, 'textbox', { name: 'input' })).toBeVisible();
    expect(getByRole(container, 'textbox', { name: 'textarea' })).toBeVisible();
    expect(getByRole(container, 'combobox', { name: 'select' })).toBeVisible();
    expect(getByRole(container, 'group', { name: 'radio' })).toBeVisible();
    expect(
      getByRole(container, 'textbox', { name: 'tagsInput' })
    ).toBeVisible();
    expect(getByTestId(container, 'unchanged-div')).toBeVisible();
  });
});
