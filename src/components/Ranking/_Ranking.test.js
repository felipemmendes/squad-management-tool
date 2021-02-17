import { render, fireEvent, getByRole, getAllByRole } from '../../test-utils';
import { navigateToTeam } from '../../utils/navigateToTeam';
import Ranking from './';

jest.mock('../../utils/navigateToTeam', () => ({
  navigateToTeam: jest.fn(),
}));

describe('ranking component', () => {
  it('should render ranking with passed data and caption', () => {
    const { container } = render(
      <Ranking
        caption="test-rank"
        data={[
          { id: 1, name: 'test-team-1', average: 20 },
          { id: 2, name: 'test-team-2', average: 15 },
        ]}
      />
    );

    expect(getByRole(container, 'heading')).toHaveTextContent('test-rank');

    const ul = getByRole(container, 'list');
    const [firstListItem, secondListItem] = getAllByRole(ul, 'listitem');

    expect(firstListItem).toHaveTextContent('test-team-1');
    expect(firstListItem).toHaveTextContent('20');
    expect(secondListItem).toHaveTextContent('test-team-2');
    expect(secondListItem).toHaveTextContent('15');
  });

  it('should navigate to team page on click', () => {
    expect.assertions(1);

    const { container } = render(
      <Ranking
        caption="test-rank"
        data={[{ id: 1, name: 'test-team-1', average: 20 }]}
      />
    );

    fireEvent.click(getByRole(container, 'listitem'));

    expect(navigateToTeam).toHaveBeenCalledWith(1);
  });
});
