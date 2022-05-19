import React from "react";
import { Table as TableAnt } from "antd";
import { TableStyle } from "./styled";
const Table = ({ $width, ...props }) => {
  return (
    <TableStyle $width={$width}>
      <TableAnt {...props} />
    </TableStyle>
  );
};

export default Table;
