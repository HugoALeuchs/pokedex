import React, { useState } from "react";

import styles from "../styles/PokemonCard.module.scss";

function pokemonCard(props) {
  const [statusCheck, setStatusCheck] = useState([false]);

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
      {props.loadInformationCheck == true ? (
        props.pokemonsDetails.map((pokemonsDetail, index) => (
          <div className={styles.card} key={index}>
            <div
              className={styles.cardBackground}
              style={{
                backgroundColor: setBackgroundColor(
                  pokemonsDetail.types[0].type.name,
                  1
                ),
              }}
            ></div>
            <img src={pokemonsDetail.sprites.front_default}></img>
            <div className={styles.cardButtons}>
              <a
                className={styles.statusButton}
                style={{
                  backgroundColor: setBackgroundColor(
                    pokemonsDetail.types[0].type.name,
                    1
                  ),
                }}
                onClick={() => setStatusCheck(!statusCheck)}
              >
                Status
              </a>
              <a
                className={styles.statusButton}
                style={{
                  backgroundColor: setBackgroundColor(
                    pokemonsDetail.types[0].type.name,
                    1
                  ),
                }}
                onClick={() => setStatusCheck(!statusCheck)}
              >
                Abilities
              </a>
              <a
                className={styles.statusButton}
                style={{
                  backgroundColor: setBackgroundColor(
                    pokemonsDetail.types[0].type.name,
                    1
                  ),
                }}
                onClick={() => setStatusCheck(!statusCheck)}
              >
                Types
              </a>
            </div>
            <div
              className={styles.status}
              style={{ display: statusCheck ? "none" : "flex" }}
            >
              {pokemonsDetail.stats.map((stat, index) => (
                <div key={index} className={styles.statusBorder}>
                  <div
                    className={styles.statusBar}
                    style={{
                      width: stat.base_stat + "%",
                      backgroundColor: "red",
                    }}
                  >
                    {stat.stat.name}
                  </div>
                </div>
              ))}
            </div>
            <p>
              {pokemonsDetail.name.charAt(0).toUpperCase() +
                pokemonsDetail.name.slice(1)}
            </p>
          </div>
        ))
      ) : (
        <div
          className={styles.loadingTextOpen}
          style={{ display: props.loading ? "none" : "flex" }}
        >
          <div className={styles.initialization}>
            <span>I</span>
            <span>N</span>
            <span>I</span>
            <span>T</span>
            <span>I</span>
            <span>A</span>
            <span>L</span>
            <span>I</span>
            <span>Z</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </div>
        </div>
      )}
    </>
  );
}

export default pokemonCard;
