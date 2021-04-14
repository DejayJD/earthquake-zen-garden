import React from "react";
import { Column, useSortBy, useTable } from "react-table";
import "./datatable.scss";

/**
 * A extensible table component prepped for the future.
 * A little overkill for the current earthquake zen garden needs but ready for scale 💪
 * @param columns
 * @param data
 * @constructor
 */
export const DataTable = ({
  columns,
  data
}: {
  columns: Column[];
  data: object[];
}) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <table {...getTableProps()} className="list-table">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}{" "}
                {column.isSorted ? (column.isSortedDesc ? "⬇️" : "⬆️") : ""}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
