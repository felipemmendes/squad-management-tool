import { render, getByText } from '../../setupTests';
import CardField from './';

describe('cardField component', () => {
  it('should render a cardField with most and least picked player info', () => {
    const { container } = render(
      <CardField
        mostPicked={{ initials: 'JD', picked: '100%' }}
        leastPicked={{ initials: 'DJ', picked: '5%' }}
      />
    );

    const mostPickedSide = getByText(container, 'Most picked player');
    expect(getByText(mostPickedSide, 'JD')).toBeVisible();
    expect(getByText(mostPickedSide, '100%')).toBeVisible();

    const leastPickedSide = getByText(container, 'Least picked player');
    expect(getByText(leastPickedSide, 'DJ')).toBeVisible();
    expect(getByText(leastPickedSide, '5%')).toBeVisible();
  });
});
