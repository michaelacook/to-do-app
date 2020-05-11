import React, { Component } from "react";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Number</th>
        <th>List Item</th>
        <th>Complete</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const { toDoItems } = props;
  const rows = toDoItems.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td className={item.complete ? "complete" : ""}>{item.item}</td>
        <td>
          <button
            className="accent-button"
            onClick={() => props.completeItem(index)}
          >
            Complete
          </button>
        </td>
        <td>
          <button onClick={() => props.removeItem(index)}>Remove</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = props => {
  const { toDoItems } = props;
  return (
    <table>
      <TableHead />
      <TableBody
        toDoItems={toDoItems}
        removeItem={props.removeItem}
        completeItem={props.completeItem}
        itemCount={props.count}
      />
    </table>
  );
};

export default Table;
