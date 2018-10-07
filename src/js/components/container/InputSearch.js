import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";

class inputSearch extends Component {
  constructor() {
    super();
    this.state = {
      val_input: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    
    const { val_input } = this.state;
    console.log('val_input->',val_input);
    return (
      <div>
        <Input
          text="ПОИСК "
          label="val_input"
          type="text"
          id="val_input"
          value={val_input}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default inputSearch;