import React, { Component } from "react";
import { render } from "react-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/data")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(document => {
          return (
            <li key={document.id}>
              {document.title} - {document.content}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Dashboard;
