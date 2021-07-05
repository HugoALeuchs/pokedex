import React from "react";

import styles from "../../styles/Abilities.module.scss";

function abilities(props) {
  return (
    <>
      {props.pokemonsDetail ? (
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
      ) : (
        <div></div>
      )}
    </>
  );
}

export default abilities;
