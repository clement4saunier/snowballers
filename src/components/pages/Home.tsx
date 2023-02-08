import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Page from "../layout/Page";

import blob from '../../assets/images/blob.png';

import styles from "./Home.module.css";
import Footer from "../layout/Footer";
import { useNavigate } from "@solidjs/router";

const Home: Component = () => {
  let navigate = useNavigate();

  return (
    <div class={[styles.fullScreen, styles.homeLayout, "accent"].join(" ")}>
      <div class={styles.decoration}>
        <div class={styles.snowball}>
          <img src={blob} alt="snowball blob" />
        </div>
        <div>
          <h1>Snowballers</h1>
          <p>Developers ccumulating experience and falling through the blockchain rabbit hole.</p>
          <form action="https://discord.gg/UZragcD3" target="_blank">
            <button>Join our Discord</button>
            <button onClick={() => navigate("/design")}>Design Chart</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
