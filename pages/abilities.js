import React from "react";

import styles from "../styles/Abilities.module.scss";

function abilities(props) {
  return (
    <div
      className={styles.abilities}
      style={{ display: props.abilitiesCheck ? "none" : "flex" }}
    >
      {props.pokemonsDetail.abilities.map((ability, index) => (
        <div key={index} className={styles.statusBorder}>
          <p className={styles.statusName}>{ability.ability.name}</p>
        </div>
      ))}
    </div>
  );
}

export default abilities;
