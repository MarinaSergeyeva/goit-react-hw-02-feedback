import React, { Component } from "react";
import Feedback from "../Feedback/Feedback";
import Statistics from "../Statistics/Statistics";

class Section extends Component {
  render() {
    const { good, bad, neutral, onLeaveFeedback } = this.props;
    const total = good + bad + neutral;
    const positivePercentageStart = (good * 100) / total;
    const positivePercentage = positivePercentageStart.toFixed(2);

    return (
      <>
        <Feedback onLeaveFeedback={onLeaveFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}

export default Section;
