import styled from "styled-components";
export const TableStyle = styled.div`
  width: ${({ $width }) => $width};
  .ant-table table {
    border: 1px solid #dfdada;
  }
  .ant-empty-normal {
    display: none;
  }
  .ant-table-thead > tr > th {
    border-bottom: 3px solid #ff0000;
  }
`;
