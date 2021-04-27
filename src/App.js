import React from "react";
import styles from './App.module.css';
import {Lectures} from "./components/lectures/lectures";
import {Route, Switch} from "react-router";
import {Lecture} from "./components/lecture/lecture";
import {MainPage} from "./components/main-page/main-page";

function App() {
  return (
      <div className={styles.app}>
          <Switch>
              <Route exact path='/' component={MainPage} />
              <Route exact path='/lectures' component={Lectures} />
              <Route path='/lectures/:lectureId' component={Lecture} />
          </Switch>
      </div>
  );
}

export default App;
