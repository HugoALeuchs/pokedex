import React from "react";

import styles from "../../styles/Loading.module.scss";

function loading(props) {
  return (
    <div className={styles.box}>
      <div className={styles.bigArc}></div>
      <div className={styles.smallArc}></div>
      <div className={styles.smallBall}></div>
    </div>
  );
}

export default loading;
