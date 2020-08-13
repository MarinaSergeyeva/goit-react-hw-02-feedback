import React, { Component } from "react";
import styles from "./Statistics.module.css";

class Statistics extends Component {
  state = {};

  render() {
    return (
      <>
        <p className={styles.statisticsTitle}>Statistics</p>

        <ul className={styles.statisticsList}>
          <li>
            <p>
              Good: <span> </span>
            </p>
          </li>
        </ul>
      </>
    );
  }
}

export default Statistics;
