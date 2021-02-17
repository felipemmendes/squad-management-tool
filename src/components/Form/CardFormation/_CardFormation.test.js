import {
  render,
  fireEvent,
  getByText,
  getAllByTitle,
} from '../../../test-utils';
import CardFormation from './';

describe('cardFormation component', () => {
  it('should render a card formation with correct number of dropfields', () => {
    const { container } = render(
      <CardFormation
        name="test-card-name"
        formation="1 - 2"
        value={{
          '0-0': {
            initials: 'JD',
          },

          '0-1': {
            initials: 'DJ',
          },

          '1-0': {
            initials: 'JJ',
          },

          '2-0': {
            initials: 'DD',
          },
        }}
      />
    );

    expect(getByText(container, 'JD')).toBeVisible();
    expect(getByText(container, 'DJ')).toBeVisible();
    expect(getByText(container, 'JJ')).toBeVisible();
    expect(getByText(container, 'DD')).toBeVisible();
  });

  it('should call onChange with player and card information on drop', () => {
    const mockedGetData = jest.fn().mockReturnValue(
      JSON.stringify({
        id: 1,
        name: 'John Doe',
        initials: 'JD',
        age: 30,
        nationality: 'Brazil',
      })
    );
    const mockedOnChange = jest.fn();

    const { container } = render(
      <CardFormation
        name="test-card-name"
        formation="1 - 1"
        onChange={mockedOnChange}
        value={{}}
      />
    );

    const [dropField] = getAllByTitle(container, 'drag player');

    fireEvent.drop(dropField, {
      dataTransfer: {
        dropEffect: 'copy',
        getData: mockedGetData,
      },
    });

    const parameters = {
      target: {
        name: 'test-card-name',
        changeType: 'dataDrop',
        position: '0-0',
        value: {
          id: 1,
          name: 'John Doe',
          initials: 'JD',
          age: 30,
          nationality: 'Brazil',
        },
      },
    };

    expect(mockedOnChange).toHaveBeenLastCalledWith(parameters);
  });
});
