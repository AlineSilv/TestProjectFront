import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  color:black;
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const EyeOpenIcon = styled.img`
  padding-left:10px;
  width:15px;
`;

export const BoxIcon = styled.img`
width:15px;
`;

export const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: red;
`;

export const EditIconTable = styled.span`
  &:before {
    content: "✏️";
  }
`;

export const DeleteIconTable = styled.span`
  &:before {
    content: "🗑️";
  }
`;
