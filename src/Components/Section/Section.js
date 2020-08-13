import React, { Component } from "react";
import Feedback from "../Feedback/Feedback";
import Statistics from "../Statistics/Statistics";

class Section extends Component {
  render() {
    const { good, bad, neutral } = this.props;
    const total = good + bad + neutral;
    const positivePercentage = (good * 100) / total;

    return (
      <>
        <Feedback onLeaveFeedback={} />
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
      </>
    );
  }
}

export default Section;
