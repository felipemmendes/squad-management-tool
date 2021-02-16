import { useCallback, useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { FaPen, FaShareAlt, FaSort, FaTrash } from 'react-icons/fa';

import { navigateToTeam } from '../../utils/navigateToTeam';

import * as S from './styles';
import ButtonIcon from './ButtonIcon';

const Table = ({ columns, data }) => {
  const [rowHover, setRowHover] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  const handleRemoveTeam = useCallback((id) => {
    console.log('remove team: ', id);
  }, []);

  return (
    <S.Container {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, idx) => (
              <S.TableHead
                separator={!idx}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                <div>
                  {column.render('Header')}
                  <FaSort />
                </div>
              </S.TableHead>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <S.TableRow
              {...row.getRowProps()}
              onMouseEnter={() => setRowHover(row.id)}
              onMouseLeave={() => setRowHover(null)}
            >
              {row.cells.map((cell, idx) => (
                <S.TableRowCell {...cell.getCellProps()}>
                  <div>
                    {cell.render('Cell')}
                    {row.id === rowHover && idx === 1 && (
                      <S.Options>
                        <ButtonIcon
                          onClick={() => handleRemoveTeam(row.original.id)}
                          tooltip="Remove"
                          icon={FaTrash}
                        />
                        <ButtonIcon
                          onClick={() => {}}
                          tooltip="Share"
                          icon={FaShareAlt}
                        />
                        <ButtonIcon
                          onClick={() => navigateToTeam(row.original.id)}
                          tooltip="Edit"
                          icon={FaPen}
                        />
                      </S.Options>
                    )}
                  </div>
                </S.TableRowCell>
              ))}
            </S.TableRow>
          );
        })}
      </tbody>
    </S.Container>
  );
};

export default Table;
