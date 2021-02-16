import { render, getByText } from '../../../setupTests';
import SearchCard from './';

describe('searchCard component', () => {
  it('should render a card with passed result', () => {
    const { container } = render(
      <SearchCard
        info={{ name: 'John Doe', age: '30', nacionality: 'Brazil', id: 1 }}
      />
    );

    expect(getByText(container, 'John Doe')).toBeVisible();
    expect(getByText(container, '30')).toBeVisible();
    expect(getByText(container, 'Brazil')).toBeVisible();
  });
});
