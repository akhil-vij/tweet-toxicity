import React, { Component } from "react";
import { TweetTable } from "./components/TweetTable.js";
import TextField from "@material-ui/core/TextField";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        text:
          "Some random text example goes here. Some random text example goes here.Some random text example goes here.Some random text example goes here.Some random text example goes here."
      }
    ];
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleEnter(event) {
    if (event.keyCode === 13) {
      let textValue = event.target.value;
      // Run the model on the textValue
      this.setState([
        {
          text: textValue
        }
      ]);
    }
  }
  render() {
    return (
      <div className="App">
        <TweetTable tweets={this.state} />
        <div className="manual-analysis-cont">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter any text and press Enter"
            variant="outlined"
            onChange={this.handleChange}
            onKeyDown={this.handleEnter}
          />
        </div>
      </div>
    );
  }
}

export default App;
