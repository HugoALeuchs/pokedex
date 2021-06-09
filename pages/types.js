import React from "react";

import typeIcon from "../common/typeIcon.json";
import backgroundColor from "../common/typeColors.json";

import styles from "../styles/Types.module.scss";

function types(props) {
  return (
    <div
      className={styles.types}
      style={{ display: props.typesCheck ? "none" : "flex" }}
    >
      {props.pokemonsDetail.types.map((type, index) => (
        <div key={index} className={styles.typeCircle} style={{backgroundColor: backgroundColor[type.type.name]}}>
          <img className={styles.typeIcon} src={typeIcon[type.type.name]}></img>
          <p className={styles.typeName}>{type.type.name}</p>
        </div>
      ))}
    </div>
  );
}

export default types;
