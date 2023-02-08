import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Page from "../layout/Page";

import blob from '../../assets/images/blob.png';

import styles from "./ScrollablePage.module.css";
import Footer from "../layout/Footer";

const ScrollablePage: Component = ({ banner, children }) => {
  return (
    <div class={styles.page}>
      {banner}
      <div class={styles.content}>
        <div>
        {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ScrollablePage;
