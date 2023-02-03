import type { Component } from "solid-js";
import Home from "./components/pages/Home";

import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Home />
    </div>
  );
};

export default App;
