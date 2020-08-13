import React, { Component } from "react";
import Feedback from "../Feedback/Feedback";
import Statistics from "../Statistics/Statistics";
import PropTypes from "prop-types";

class Section extends Component {
  render() {
    const { good, bad, neutral, onLeaveFeedback } = this.props;
    const total = good + bad + neutral;
    const positivePercentage = ((good * 100) / total).toFixed(2);

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

Section.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  onLeaveFeedback: PropTypes.func,
};
