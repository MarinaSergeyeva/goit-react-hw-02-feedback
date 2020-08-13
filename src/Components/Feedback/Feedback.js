import React, { Component } from "react";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  render() {
    return (
      <>
        <p className={styles.feedbackTitle}>Please leave feedback</p>

        <button type="button" name="good">
          Good
        </button>
        <button type="button" name="neutral">
          Neutral
        </button>
        <button type="button" name="bad">
          Bad
        </button>
      </>
    );
  }
}

export default Feedback;
