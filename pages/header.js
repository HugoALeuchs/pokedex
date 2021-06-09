import React from "react";
import styles from "../styles/Header.module.scss";

const PokeballNav = "/imgs/PokeballNav.png";
const Loupe = "/imgs/loupe.svg";
const Filter = "/imgs/filter.svg";
const Console = "/imgs/console.svg";

function header(props) {
  return (
    <div className={props.loading ? styles.nav : styles.navOpen}>
      <nav className={styles.navbar}>
        <img src={PokeballNav}></img>
        <div
          className={styles.search}
          style={{ display: props.loading ? "none" : "flex" }}
        >
          <img className={styles.icon} src={Loupe}></img>
        </div>
        <div
          className={styles.filter}
          style={{ display: props.loading ? "none" : "flex" }}
        >
          <img className={styles.icon} src={Filter}></img>
        </div>
        <div
          className={styles.games}
          style={{ display: props.loading ? "none" : "flex" }}
        >
          <img className={styles.icon} src={Console}></img>
        </div>
      </nav>
    </div>
  );
}

export default header;
