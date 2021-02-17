import { render, getByText } from '../../test-utils';
import CardField from './';

describe('cardField component', () => {
  it('should render a cardField with most and least picked player info', () => {
    const { container } = render(
      <CardField
        pickedPlayers={{ 'John Doe': 2, 'Doe Jane': 5, 'Joseph Joe': 3 }}
      />
    );

    const mostPickedSide = getByText(container, 'Most picked player');
    expect(getByText(mostPickedSide, 'DJ')).toBeVisible();
    expect(getByText(mostPickedSide, '50%')).toBeVisible();

    const leastPickedSide = getByText(container, 'Least picked player');
    expect(getByText(leastPickedSide, 'JD')).toBeVisible();
    expect(getByText(leastPickedSide, '20%')).toBeVisible();
  });
});
