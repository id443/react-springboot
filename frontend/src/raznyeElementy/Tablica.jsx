import React, { Component } from "react";

class Tablica extends Component {
  constructor(props) {
    super();
    this.state = {
      data: props.initialData,
      sortby: null,
      descending: false,
      };
    this.sort = this.sort.bind(this);
  }
  
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) => (
              <th key={idx}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Tablica;
