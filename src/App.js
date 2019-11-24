import React, { Component } from "react";
import { TweetTable } from "./components/TweetTable.js";
import TextField from "@material-ui/core/TextField";

import * as toxicity from "@tensorflow-models/toxicity";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          text: "You Suck.",
          identity_attack: "-",
          insult: "-",
          obscene: "-",
          severe_toxicity: "-",
          sexual_explicit: "-",
          threat: "-",
          toxicity: "-"
        },
        {
          text: "I will kill you.",
          identity_attack: "-",
          insult: "-",
          obscene: "-",
          severe_toxicity: "-",
          sexual_explicit: "-",
          threat: "-",
          toxicity: "-"
        }
      ]
    };
    this.handleEnter = this.handleEnter.bind(this);
  }

  async componentDidMount() {
    // Load the model
    let model = await toxicity.load(0.65);
    const results = await model.classify(this.state.tweets.map(d => d.text));
    // Once you have the results, need to update the state
    this.setState(prevState => {
      return {
        tweets: prevState.tweets.map((tweet, counter) => {
          // Going through each column for each tweet
          let newTweet = {};
          newTweet.text = tweet.text;
          newTweet["identity_attack"] = results[0].results[counter].match
            ? "TRUE"
            : "-";
          newTweet["insult"] = results[1].results[counter].match ? "TRUE" : "-";
          newTweet["obscene"] = results[2].results[counter].match
            ? "TRUE"
            : "-";
          newTweet["severe_toxicity"] = results[3].results[counter].match
            ? "TRUE"
            : "-";
          newTweet["sexual_explicit"] = results[4].results[counter].match
            ? "TRUE"
            : "-";
          newTweet["threat"] = results[5].results[counter].match ? "TRUE" : "-";
          newTweet["toxicity"] = results[6].results[counter].match
            ? "TRUE"
            : "-";
          return newTweet;
        })
      };
    });
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
        <TweetTable tweets={this.state.tweets} />
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
