import type { Component } from "solid-js";

const Inputs: Component = () => {
  return (
    <>
      <h1>Inputs</h1>
      <p>
        Inputs
      </p>
      <input placeholder="text" />
      <input type="number" placeholder="number" />
      <input type="date" placeholder="number" />
      <br />
      <label for="checkbox">
        <input id="checkbox" type="checkbox" placeholder="number" />
        Toggle
      </label>
      <input type="range" placeholder="range" />
      <br />
      <input type="search" placeholder="search" />
      <input type="file" placeholder="file" />
      <br/>
      <br/>
      <textarea placeholder="textarea" />
    </>
  );
};

export default Inputs;
