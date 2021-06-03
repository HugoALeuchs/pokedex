import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "./header.js";
import Footer from "./footer.js";
import PokemonCard from "./pokemonCard.js";
const ArrowRight = "/imgs/ArrowRight.png";
const ArrowLeft = "/imgs/ArrowLeft.png";

export default function Home(props) {
  const [loading, setLoading] = useState([true]);
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [loadInformationCheck, setLoadInformationCheck] = useState([false]);
  const [nextPageInformation, setnextPageInformation] = useState([]);
  const [previousPageInformation, setpreviousPageInformation] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      setLoading(false);
    }, 4500);
    setTimeout(function () {
      setPokemonsDetails(props.pokemonsDetails);
      setnextPageInformation(props.data.next);
      setLoadInformationCheck(true);
    }, 9500);
  }, []);

  async function fetchData(url) {
    const pokemonsDetails = [];
    const res = await fetch(url);
    const data = await res.json();

    for (let i = 0; i < data["results"].length; i++) {
      const res1 = await fetch(data["results"][i].url);
      const data1 = await res1.json();
      pokemonsDetails.push(data1);
    }
    setnextPageInformation(data.next);
    setpreviousPageInformation(data.previous);
    setPokemonsDetails(pokemonsDetails);
  }

  return (
    <div className={styles.container}>
      <Head></Head>

      <main className={loading ? styles.main : styles.mainOpen}>
        <Header loading={loading}></Header>
        <div className={styles.background}>
          {loadInformationCheck == true ? (
            pokemonsDetails.map((pokemonsDetail, index) => (
              <PokemonCard
                index={index}
                loading={loading}
                pokemonsDetail={pokemonsDetail}
              ></PokemonCard>
            ))
          ) : (
            <div
              className={styles.loadingTextOpen}
              style={{ display: loading ? "none" : "flex" }}
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
          <div className={loading ? styles.pagination : styles.paginationOpen}>
            <img
              onClick={() => {
                fetchData(previousPageInformation);
              }}
              src={ArrowLeft}
            ></img>
            <img
              onClick={() => {
                fetchData(nextPageInformation);
              }}
              src={ArrowRight}
            ></img>
          </div>
        </div>
      </main>
      <Footer loading={loading}></Footer>
    </div>
  );
}

export async function getServerSideProps() {
  const pokemonsDetails = [];
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=8");
  const data = await res.json();

  for (let i = 0; i < data["results"].length; i++) {
    const res1 = await fetch(data["results"][i].url);
    const data1 = await res1.json();
    pokemonsDetails.push(data1);
  }

  return {
    props: { pokemonsDetails, data },
  };
}
