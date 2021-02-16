import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, useSortBy } from 'react-table';
import { FaPen, FaShareAlt, FaSort, FaTrash } from 'react-icons/fa';

import { removeTeam } from '../../store/index';
import { navigateToTeam } from '../../utils/navigateToTeam';

import * as S from './styles';
import ButtonIcon from './ButtonIcon';

const Table = ({ columns, data }) => {
  const dispatch = useDispatch();
  const [rowHover, setRowHover] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  const handleRemoveTeam = useCallback(
    (id) => {
      dispatch(removeTeam(id));
    },
    [dispatch]
  );

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
                  <S.CellContent>
                    <p>{cell.render('Cell')}</p>
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
                  </S.CellContent>
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
