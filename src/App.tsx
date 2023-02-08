import type { Component } from "solid-js";
import { Route, Router, Routes } from "@solidjs/router";

import styles from "./App.module.css";

import Home from "./components/pages/Home";
import Design from "./components/pages/Design";

const App: Component = () => {
  return (
    <Router>
      <div class={styles.App}>
        <Routes>
          <Route path="/" component={Home}/>
          <Route path="/design/*" component={Design}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
