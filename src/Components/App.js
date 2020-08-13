import React, { Component } from "react";
import Section from "./Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback() {}

  render() {
    const { good, neutral, bad } = this.state;

    return <Section title="" good={good} neutral={neutral} bad={bad} />;
  }
}

export default App;
