import React from "react";

import styles from "../styles/Types.module.scss";

function types(props) {
  return (
    <div
      className={styles.abilities}
      style={{ display: props.typesCheck ? "none" : "flex" }}
    >
      {props.pokemonsDetail.types.map((type, index) => (
        <div key={index} className={styles.statusBorder}>
          <p className={styles.statusName}>{type.type.name}</p>
        </div>
      ))}
    </div>
  );
}

export default types;
