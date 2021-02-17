import { render, fireEvent, getByTestId } from '../../../test-utils';
import ButtonIcon from './';

describe('buttonIcon component', () => {
  it('should render a button with passed icon', () => {
    const mockedOnClick = jest.fn();

    const { container } = render(
      <ButtonIcon
        tooltip="test-tooltip"
        icon={<svg data-testid="svg" />}
        onClick={mockedOnClick}
      />
    );

    expect(getByTestId(container, 'svg')).toBeVisible();
  });

  it('should call the function passed on click', () => {
    const mockedOnClick = jest.fn();

    const { container } = render(
      <ButtonIcon
        tooltip="test-tooltip"
        icon={<svg data-testid="svg" />}
        onClick={mockedOnClick}
      />
    );

    fireEvent.click(container.firstChild);

    expect(mockedOnClick).toHaveBeenCalled();
  });
});
