import { Component, createMemo } from "solid-js";
import { createSignal } from "solid-js";
import Page from "../layout/Page";

import blob from '../../assets/images/blob.png';

import styles from "./Home.module.css";
import ScrollablePage from "./ScrollablePage";
import Footer from "../layout/Footer";
import { A, Route, Routes, useLocation, useNavigate } from "@solidjs/router";
import Inputs from "./design/Inputs";
import Logo from "./design/Logo";
import Colors from "./design/Colors";
import Fonts from "./design/Fonts";

const Design: Component = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const pathname = createMemo(() => {
    const paths = location.pathname.split('/');
    return paths.length > 0 ? paths[paths.length - 1] : ""
  });

  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  const NavigationButton: Component = ({ to }) => {
    console.log(pathname(), to);

    return <button class={pathname() === to ? "accent" : ""} onClick={() => navigate(to)}>
      {capitalize(to)}
    </button>
  }

  return (
    <ScrollablePage banner={
      <div class={[styles.homeLayout, "accent"].join(" ")}>
        <div class={styles.decoration}>
          <div class={styles.snowball}>
            <img src={blob} alt="snowball blob" />
          </div>
          <div>
            <h1>Design Chart</h1>
            <p>The snowballers design chart reflects our values of consitent and incremental progress towards success.</p>
            <p>We believe there are young developers with a lot of potential energy, they only need a little push to start rolling towards the decentralized internet. </p>
          </div>
        </div>
      </div>
    }>
      {["fonts", "inputs", "colors", "logo"].map((page, idx) => <NavigationButton to={page} key={idx} />)}
      <Routes>
        <Route path="inputs" component={Inputs}/>
        <Route path="fonts" component={Fonts}/>
        <Route path="colors" component={Colors}/>
        <Route path="logo" component={Logo}/>
      </Routes>
    </ScrollablePage>
  );
};

export default Design;
