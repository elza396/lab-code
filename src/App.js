import React from "react";
import styles from './App.module.css';
import {Lectures} from "./components/lectures/lectures";
import {Route, Switch} from "react-router";

function App() {
  return (
      <div className={styles.app}>
        <Switch>
          <Route exact path='/lectures' component={Lectures} />
        </Switch>
      </div>
  );
}

export default App;
