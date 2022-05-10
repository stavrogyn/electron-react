import React, { Component } from "react";
import { hot } from "react-hot-loader";

import * as styles from "./app.css";

const Text = (
) => <h1>"HELLO WORLDS"</h1>

class App extends Component {
  render() {
    return (
      <div className={styles.example}>
        <Text />
      </div>
    );
  }
}

export default hot(module)(App);
