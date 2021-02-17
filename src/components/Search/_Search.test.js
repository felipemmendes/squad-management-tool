import { fireEvent, render, getByRole, findByRole } from '../../test-utils';
import api from '../../services/api';

import Search from './';

jest.mock('../../services/api', () => {
  return {
    get: jest.fn(),
  };
});

describe('search component', () => {
  it('should render a search area with empty results', () => {
    const { container } = render(
      <Search
        label="test-search-label"
        name="test-search-name"
        inputId="test-search-input"
        selected={{
          '0-0': {
            id: 1,
          },
        }}
      />
    );

    expect(
      getByRole(container, 'searchbox', { name: 'test-search-label' })
    ).toBeVisible();
    expect(getByRole(container, 'list')).toBeEmptyDOMElement();
  });

  it('should call api on input change and render results', async () => {
    api.get.mockResolvedValue({
      data: [
        {
          player_id: 1,
          player_name: 'John Doe',
          age: 30,
          nationality: 'Brazil',
        },
      ],
    });

    const { container } = render(
      <Search
        label="test-search-label"
        name="test-search-name"
        inputId="test-search-input"
        selected={{
          '0-0': {
            id: 1,
          },
        }}
      />,
      {
        initialState: {
          players: {
            results: [],
          },
        },
      }
    );

    const searchInput = getByRole(container, 'searchbox', {
      name: 'test-search-label',
    });

    fireEvent.change(searchInput, { target: { value: 'a' } });

    expect(await findByRole(container, 'listitem')).toBeVisible();
  });
});
