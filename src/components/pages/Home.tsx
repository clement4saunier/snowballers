import type { Component, JSXElement } from "solid-js";
import { createSignal } from "solid-js";
import Page from "../layout/Page";

import blob from '../../assets/images/blob.png';

import styles from "./Home.module.css";
import Footer from "../layout/Footer";

const Home: JSXElement = () => {
  return (
    <div class={[styles.fullScreen, styles.homeLayout].join(" ")}>
      <div class={styles.decoration}>
        <div class={styles.snowball}>
          <img src={blob} alt="snowball blob" />
        </div>
        <div>
          <h1>Snowballers</h1>
          <p>Accumulating experience and falling through the blockchain rabbit hole.</p>
          <form action="https://discord.gg/UZragcD3" target="_blank">
            <button>Join our Discord</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
