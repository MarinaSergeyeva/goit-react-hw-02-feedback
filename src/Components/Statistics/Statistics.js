import React, { Component } from "react";
import styles from "./Statistics.module.css";

class Statistics extends Component {
  render() {
    const { good, bad, neutral, total, positivePercentage } = this.props;

    return (
      <>
        <p className={styles.statisticsTitle}>Statistics</p>

        {total === 0 ? (
          "No feedback given"
        ) : (
          <ul className={styles.statisticsList}>
            <li>
              <p className={styles.statisticsItem}>
                Good: <span>{good}</span>
              </p>
            </li>
            <li>
              <p className={styles.statisticsItem}>
                Neutral: <span> {neutral}</span>
              </p>
            </li>
            <li>
              <p className={styles.statisticsItem}>
                Bad: <span>{bad} </span>
              </p>
            </li>
            <li>
              <p className={styles.statisticsItem}>
                Total: <span>{total} </span>
              </p>
            </li>
            <li>
              <p className={styles.statisticsItem}>
                Positive Percentage:
                <span>
                  {isNaN(positivePercentage) ? 0 : positivePercentage}%
                </span>
              </p>
            </li>
          </ul>
        )}
      </>
    );
  }
}

export default Statistics;
