import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ListContainer } from './list-container/listContainer';
import { AddContainer } from './add-container/addContainer';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.scss';

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div> */}
      <Switch>
        <Route exact path="/">
          <ListContainer/>
        </Route>
        <Route path="/new">
          <AddContainer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
