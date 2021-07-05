import React from "react";
import styles from "../../styles/Header.module.scss";

const PokeballNav = "/imgs/PokeballNav.png";
const Loupe = "/imgs/loupe.svg";
const Filter = "/imgs/filter.svg";
const Console = "/imgs/console.svg";

function header(props) {
  return (
    <div className={props.loading ? styles.nav : styles.navOpen}>
      <nav className={styles.navbar}>
        <img className={styles.navbarPokeBall} src={PokeballNav}></img>
        <div
          className={styles.search}
          style={{ display: props.loading ? "none" : "flex" }}
        >
          <img className={styles.icon} src={Loupe}></img>
          <input className={styles.searchText}></input>
        </div>
        <div
          className={styles.filter}
          style={{ display: props.loading ? "none" : "flex" }}
        >
          <img className={styles.icon} src={Filter}></img>
          <div className={styles.filtersName}>
          <p>normal</p>
          <p>fighting</p>
          <p>fire</p>
          <p>grass</p>
          <p>water</p>
          <p>flying</p>
          <p>poison</p>
          <p>ground</p>
          <p>rock</p>
          <p>bug</p>
          <p>ghost</p>
          <p>steel</p>
          <p>electric</p>
          <p>psychic</p>
          <p>ice</p>
          <p>dragon</p>
          <p>dark</p>
          <p>fairy</p>
          <p>unknown</p>
          <p>shadow</p>
          </div>
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
