import React from 'react';
import styles from "../../styles/Footer.module.scss";

const PokeballFooter = "/imgs/PokeballFooter.png";

function footer(props) {
    return (
        <footer className={props.loading ? styles.footer : styles.footerOpen}>
        <img src={PokeballFooter}></img>
      </footer>
    );
}

export default footer;