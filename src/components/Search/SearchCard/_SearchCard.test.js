import { render, fireEvent, getByText, getByRole } from '../../../test-utils';
import SearchCard from './';

describe('searchCard component', () => {
  it('should render a card with passed result', () => {
    const { container } = render(
      <SearchCard
        info={{
          player_name: 'John Doe',
          age: 30,
          nationality: 'Brazil',
          player_id: 1,
        }}
      />
    );

    expect(getByText(container, 'John Doe')).toBeVisible();
    expect(getByText(container, '30')).toBeVisible();
    expect(getByText(container, 'Brazil')).toBeVisible();
    expect(getByRole(container, 'listitem')).toHaveAttribute(
      'draggable',
      'true'
    );
  });

  it('should render a disabled card', () => {
    const { container } = render(
      <SearchCard
        info={{
          player_name: 'John Doe',
          age: 30,
          nationality: 'Brazil',
          player_id: 1,
        }}
      />,
      {
        initialState: {
          players: {
            selected: [1],
          },
        },
      }
    );

    expect(getByRole(container, 'listitem')).toHaveAttribute(
      'draggable',
      'false'
    );
  });

  it('should get data on drag', () => {
    const mockedSetData = jest.fn();

    const { container } = render(
      <SearchCard
        info={{
          player_name: 'John Doe',
          age: 30,
          nationality: 'Brazil',
          player_id: 1,
        }}
      />
    );

    expect(getByRole(container, 'listitem')).toHaveAttribute(
      'draggable',
      'true'
    );

    fireEvent.dragStart(getByRole(container, 'listitem'), {
      dataTransfer: {
        dropEffect: '',
        setData: mockedSetData,
      },
    });

    expect(mockedSetData).toHaveBeenCalledWith(
      'text/plain',
      JSON.stringify({
        id: 1,
        name: 'John Doe',
        initials: 'JD',
        age: 30,
        nationality: 'Brazil',
      })
    );
  });
});
