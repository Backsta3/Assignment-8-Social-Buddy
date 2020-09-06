import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from '@material-ui/core';
import Overview from './Components/Overview/Overview';
import Scripts from './Components/Scripts/Scripts';
import Undefiend from './Components/Undefiend/Undefiend';
import Header from './Components/Header/Header';

function App() {
  return (
    <>
 <Header></Header>
 <Container>
 <Router>
  <Switch>
    <Route exact path="/">
      <Overview></Overview>
    </Route>
    <Route path="/home">
      <Overview></Overview>
    </Route>
    <Route path="/about/:friendId">
      <Scripts></Scripts>
    </Route>
    <Route  path="/*">
      <Undefiend></Undefiend>
    </Route>
  </Switch>
 </Router>
 </Container></>
  );
}

export default App;
