import React, { Component } from "react";

class TableContent extends Component {
  render() {
    const { data, columns } = this.props;
    console.log(data, columns);
    return (
      <tbody>
        {/* {data.map(item => {
          return (
            <tr>
              {columns.map(column => {
                return <td>{column}</td>;
              })}
            </tr>
          );
        })} */}
      </tbody>
    );
  }
}

export default TableContent;
