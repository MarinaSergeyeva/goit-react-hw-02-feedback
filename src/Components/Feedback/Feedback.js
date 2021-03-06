import React, { Component } from "react";
import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

class Feedback extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <>
        <p className={styles.feedbackTitle}>Please leave feedback</p>

        <button
          type="button"
          name="good"
          onClick={() => onLeaveFeedback("good")}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={() => onLeaveFeedback("neutral")}
        >
          Neutral
        </button>
        <button type="button" name="bad" onClick={() => onLeaveFeedback("bad")}>
          Bad
        </button>
      </>
    );
  }
}

export default Feedback;

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
