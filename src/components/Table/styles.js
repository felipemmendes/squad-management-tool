import styled from 'styled-components';

export const Container = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  width: 100%;

  td {
    text-align: left;
    height: 60px;
    padding: 0 20px;
    font-size: 0.8rem;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.colors.separator};
  }
`;

export const TableHead = styled.th`
  text-align: left;
  height: 60px;
  padding-left: 20px;
  font-size: 0.8rem;
  font-weight: bold;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-right: ${(props) =>
      props.separator
        ? `1px solid ${props.theme.colors.borderSecondary}`
        : 'none'};
  }

  &:nth-child(1) {
    width: 25%;
  }

  &:nth-child(2) {
    width: 75%;
  }

  svg {
    margin-right: 20px;
  }
`;

export const TableRow = styled.tr`
  td:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }

  td:nth-child(2) {
    border-radius: 0 5px 5px 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparentFillSecondary};

    td {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const TableRowCell = styled.td`
  width: 100%;
`;

export const CellContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    padding: 0.5rem 0;
    width: 80%;
  }
`;

export const Options = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin-left: auto;
`;
