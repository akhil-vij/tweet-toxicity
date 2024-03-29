import React from "react";
import { TweetTable } from "./components/TweetTable.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import * as toxicity from "@tensorflow-models/toxicity";

import "./App.css";

let dummyData = [
  {
    text:
      "I will kill your entire family if you do not give me $100000 as ransom amount.",
    identity_attack: "-",
    insult: "-",
    obscene: "-",
    severe_toxicity: "-",
    sexual_explicit: "-",
    threat: "-",
    toxicity: "-"
  },
  {
    text:
      "You are writing stupid comments from your room hidden behind your screen. You are quite astonishingly stupid.",
    identity_attack: "-",
    insult: "-",
    obscene: "-",
    severe_toxicity: "-",
    sexual_explicit: "-",
    threat: "-",
    toxicity: "-"
  },
  {
    text: "What a lovely and bright day. Sun is shining in the clear sky :)",
    identity_attack: "-",
    insult: "-",
    obscene: "-",
    severe_toxicity: "-",
    sexual_explicit: "-",
    threat: "-",
    toxicity: "-"
  },
  {
    text:
      "What a lovely and bright day. Sun is shining in the clear sky :). Perfect day for murdering trolls like you.",
    identity_attack: "-",
    insult: "-",
    obscene: "-",
    severe_toxicity: "-",
    sexual_explicit: "-",
    threat: "-",
    toxicity: "-"
  },
  {
    text: "You are a racist moron.",
    identity_attack: "-",
    insult: "-",
    obscene: "-",
    severe_toxicity: "-",
    sexual_explicit: "-",
    threat: "-",
    toxicity: "-"
  },
  {
    text:
      "RT @p_r_k_d_l: this is a stupid idea but i have to get this out of my system https://t.co/6H5BtRh8rL",
    identity_attack: "-",
    insult: "-",
    obscene: "-",
    severe_toxicity: "-",
    sexual_explicit: "-",
    threat: "-",
    toxicity: "-"
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: dummyData
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.handlePopulate = this.handlePopulate.bind(this);
    this.model = null;
  }

  async componentDidMount() {
    // Flow for the initial load
    // Load the model
    this.model = await toxicity.load(0.5);
    const results = await this.model.classify(
      this.state.tweets.map(d => d.text)
    );

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

  handleClear() {
    this.setState({
      tweets: []
    });
  }

  async handlePopulate() {
    this.handleClear();
    const results = await this.model.classify(dummyData.map(d => d.text));
    this.setState(prevState => {
      return {
        tweets: dummyData.map((tweet, counter) => {
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

  handleFetch() {
    this.handleClear();
    fetch("/search")
      .then(res => {
        return res.json();
      })
      .then(async data => {
        if (data) {
          let results = [];
          if (data.statuses && data.statuses.length) {
            results = await this.model.classify(data.statuses.map(d => d.text));
          } else {
            data.statuses = [];
            data.statuses.push(dummyData[5]);
            results = await this.model.classify(data.statuses.map(d => d.text));
          }

          this.setState(prevState => {
            return {
              tweets: data.statuses.map((tweet, counter) => {
                // Going through each column for each tweet
                let newTweet = {};
                newTweet.text = tweet.text;
                newTweet["identity_attack"] = results[0].results[counter].match
                  ? "TRUE"
                  : "-";
                newTweet["insult"] = results[1].results[counter].match
                  ? "TRUE"
                  : "-";
                newTweet["obscene"] = results[2].results[counter].match
                  ? "TRUE"
                  : "-";
                newTweet["severe_toxicity"] = results[3].results[counter].match
                  ? "TRUE"
                  : "-";
                newTweet["sexual_explicit"] = results[4].results[counter].match
                  ? "TRUE"
                  : "-";
                newTweet["threat"] = results[5].results[counter].match
                  ? "TRUE"
                  : "-";
                newTweet["toxicity"] = results[6].results[counter].match
                  ? "TRUE"
                  : "-";
                return newTweet;
              })
            };
          });
        }
      });
  }

  async handleEnter(event) {
    if (event.keyCode === 13) {
      let textValue = event.target.value;
      event.target.value = "";
      const results = await this.model.classify(textValue);
      let newTweet = {};
      let counter = 0;
      newTweet.text = textValue;
      newTweet["identity_attack"] = results[0].results[counter].match
        ? "TRUE"
        : "-";
      newTweet["insult"] = results[1].results[counter].match ? "TRUE" : "-";
      newTweet["obscene"] = results[2].results[counter].match ? "TRUE" : "-";
      newTweet["severe_toxicity"] = results[3].results[counter].match
        ? "TRUE"
        : "-";
      newTweet["sexual_explicit"] = results[4].results[counter].match
        ? "TRUE"
        : "-";
      newTweet["threat"] = results[5].results[counter].match ? "TRUE" : "-";
      newTweet["toxicity"] = results[6].results[counter].match ? "TRUE" : "-";
      // Need to just append one object to the state
      this.setState({
        tweets: [...this.state.tweets, newTweet]
      });
    }
  }
  render() {
    return (
      <div className="App">
        <TextField
          disabled
          id="outlined-disabled"
          label="Text/Tweet Monitoring Application"
          defaultValue="This application uses Deep Neural Networks to find out rude/offensive language in texts/tweets. 
          The tensorflow model is loaded when the page loads, so you might have to wait for 4-5 seconds before you see the prediction of the model.
          The application is seeded with some dummy data, you can clear the dummy data and fetch random tweets from the twitter API.
          This application can also be used as a real time rude/offensive language detection in tweets. REMEMBER - Please avoid using offensive language in your social media platforms :)
          "
          fullWidth
          multiline
          margin="normal"
          variant="outlined"
        />
        <div className="button-cont">
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleFetch}
          >
            Fetch Random Tweet(s)
          </Button>
          <Button onClick={this.handleClear}>Clear Table</Button>
          <Button onClick={this.handlePopulate}>
            Populate with Dummy Data
          </Button>
        </div>
        <TweetTable tweets={this.state.tweets} />
        <div className="manual-analysis-cont">
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter any text for Toxicity classification and press Enter"
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
