import React, { useState } from "react";
import Status from "./status.js";
import Abilities from "./abilities.js";
import Types from "./types.js";

import styles from "../styles/PokemonCard.module.scss";

function pokemonCard(props) {
  const [statusCheck, setStatusCheck] = useState([false]);
  const [abilitiesCheck, setAbilitiesCheck] = useState([false]);
  const [typesCheck, setTypesCheck] = useState([false]);

  function setBackgroundColor(pokemonType, opacity) {
    switch (pokemonType) {
      case "normal":
        return "#b1b1b1";
        break;
      case "fighting":
        return "#b64d19";
        break;
      case "fire":
        return "rgb(180, 90, 101," + opacity + ")";
        break;
      case "grass":
        return "rgb(72, 163, 81," + opacity + ")";
        break;
      case "water":
        return "rgb(74, 139, 159," + opacity + ")";
        break;
      case "flying":
        return "#277ba1";
        break;
      case "poison":
        return "#823ec3";
        break;
      case "ground":
        return "#8a8331";
        break;
      case "rock":
        return "#715c3d";
        break;
      case "bug":
        return "#2f9651";
        break;
      case "ghost":
        return "#83417a";
        break;
      case "steel":
        return "#6c6c6c";
        break;
      case "electric":
        return "#ba9a22";
        break;
      case "psychic":
        return "#452a8d";
        break;
      case "ice":
        return "#659dba";
        break;
      case "dragon":
        return "#d57931";
        break;
      case "dark":
        return "#232424";
        break;
      case "fairy":
        return "#ba65a0";
        break;
      case "unknown":
        return "#9a9a9a";
        break;
      case "shadow":
        return "#414141";
        break;
      default:
        return "white";
        break;
    }
  }

  return (
    <>
      <div className={styles.card} key={props.index}>
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
            backgroundColor: setBackgroundColor(
              props.pokemonsDetail.types[0].type.name,
              1
            ),
          }}
        ></div>
        <img
          src={
            props.pokemonsDetail.sprites.other["official-artwork"].front_default
          }
        ></img>
        <p className={styles.pokemonName}>
          {props.pokemonsDetail.name.charAt(0).toUpperCase() +
            props.pokemonsDetail.name.slice(1)}
        </p>
        <Status pokemonsDetail = {props.pokemonsDetail} statusCheck = {statusCheck}></Status>
        <Abilities pokemonsDetail = {props.pokemonsDetail} abilitiesCheck = {abilitiesCheck}></Abilities>
        <Types pokemonsDetail = {props.pokemonsDetail} typesCheck = {typesCheck}></Types>
      </div>
    </>
  );
}

export default pokemonCard;
