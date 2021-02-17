import { render, getByTitle, getByText } from '../../../../test-utils';
import PlayerCard from './';

describe('playerCard component', () => {
  it('should render a player card without data', () => {
    const { container } = render(
      <PlayerCard
        id="test-card-id"
        handleDrop={() => {}}
        handleDragOver={() => {}}
      />
    );

    expect(getByTitle(container, 'drag player')).not.toBeVisible();
  });

  it('should render a player card with data', () => {
    const { container } = render(
      <PlayerCard
        id="test-card-id"
        handleDrop={jest.fn()}
        handleDragOver={jest.fn()}
        player={{
          initials: 'JD',
        }}
      />
    );

    expect(getByText(container, 'JD')).toBeVisible();
  });
});
