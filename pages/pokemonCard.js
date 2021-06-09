import React, { useState } from "react";
import Status from "./status.js";
import Abilities from "./abilities.js";
import Types from "./types.js";
import Loading from "./loading.js";

import backgroundColor from "../common/typeColors.json";

import styles from "../styles/PokemonCard.module.scss";

function pokemonCard(props) {
  const [statusCheck, setStatusCheck] = useState([false]);
  const [abilitiesCheck, setAbilitiesCheck] = useState([false]);
  const [typesCheck, setTypesCheck] = useState([false]);

  return (
      <div className={styles.card} key={props.index}>
        {props.changingPageCheck == false ? (
          <>
            <div className={styles.cardButtons}>
              <a
                className={styles.statusButton}
                style={{
                  backgroundColor: "red",
                  top: "20%",
                }}
                onClick={() => setStatusCheck(!statusCheck)}
              >
                Status
              </a>
              <a
                className={styles.statusButton}
                style={{
                  backgroundColor: "green",
                }}
                onClick={() => setAbilitiesCheck(!abilitiesCheck)}
              >
                Abilities
              </a>
              <a
                className={styles.statusButton}
                style={{
                  backgroundColor: "blue",
                  bottom: "20%",
                }}
                onClick={() => setTypesCheck(!typesCheck)}
              >
                Types
              </a>
            </div>
            <div
              className={styles.cardBackground}
              style={{
                backgroundColor: backgroundColor[props.pokemonsDetail.types[0].type.name]
              }}
            ></div>
            <img
              className={styles.pokemonImg}
              src={
                props.pokemonsDetail.sprites.other["official-artwork"]
                  .front_default
              }
            ></img>
            <p className={styles.pokemonName}>
              {props.pokemonsDetail.name.charAt(0).toUpperCase() +
                props.pokemonsDetail.name.slice(1)}
            </p>
            <Status
              pokemonsDetail={props.pokemonsDetail}
              statusCheck={statusCheck}
            ></Status>
            <Abilities
              pokemonsDetail={props.pokemonsDetail}
              abilitiesCheck={abilitiesCheck}
            ></Abilities>
            <Types
              pokemonsDetail={props.pokemonsDetail}
              typesCheck={typesCheck}
            ></Types>
          </>
        ) : (
          <Loading></Loading>
        )}
      </div>
  );
}

export default pokemonCard;
