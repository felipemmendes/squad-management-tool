import { render, fireEvent, getByRole, getAllByRole } from '../../setupTests';
import Table from './';

describe('table component', () => {
  it('should render a table with the columns and data passed', () => {
    const { container } = render(
      <Table
        columns={[
          {
            Header: 'test-header-name',
            accessor: 'test-column',
          },
        ]}
        data={[
          {
            id: 1,
            'test-column': 'test-team-data-column',
          },
        ]}
      />
    );

    const table = getByRole(container, 'table');
    expect(table).toBeVisible();

    const [thead, tbody] = getAllByRole(table, 'rowgroup');
    expect(getByRole(thead, 'columnheader')).toHaveTextContent(
      'test-header-name'
    );
    expect(getByRole(tbody, 'row')).toHaveTextContent('test-team-data-column');
  });

  it('should reorder table rows when clicking on column header', () => {
    const { container } = render(
      <Table
        columns={[
          {
            Header: 'test-header-name',
            accessor: 'test-column',
          },
        ]}
        data={[
          {
            id: 1,
            'test-column': '2-test-team-data-column',
          },
          {
            id: 2,
            'test-column': '1-test-team-data-column',
          },
        ]}
      />
    );

    const [thead, tbody] = getAllByRole(container, 'rowgroup');

    expect(getAllByRole(tbody, 'row')[0]).toHaveTextContent(
      '2-test-team-data-column'
    );

    fireEvent.click(getByRole(thead, 'columnheader'));

    expect(getAllByRole(tbody, 'row')[0]).toHaveTextContent(
      '1-test-team-data-column'
    );
  });
});
