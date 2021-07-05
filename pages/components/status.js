import React from "react";

import styles from "../../styles/Status.module.scss";

function status(props) {
  return (
    <>
      {props.pokemonsDetail ? (
        <div
          className={styles.status}
          style={{ display: props.statusCheck ? "none" : "flex" }}
        >
          {props.pokemonsDetail.stats.map((stat, index) => (
            <div key={index} className={styles.statusBorder}>
              <div
                className={styles.statusBar}
                style={{
                  width: Math.min(stat.base_stat / 1.1, 100) + "%",
                }}
              >
                <p className={styles.statusName}>{stat.stat.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default status;
