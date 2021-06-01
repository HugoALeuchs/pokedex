import React from 'react';
import styles from "../styles/Header.module.scss";

const PokeballNav = "/imgs/PokeballNav.png";

function header(props) {
    return (
        <div className={props.loading ? styles.nav : styles.navOpen}>
        <nav className={styles.navbar}>
          <img src={PokeballNav}></img>
        </nav>
      </div>
    );
}

export default header;