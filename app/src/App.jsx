import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePics from './pages/PagePics';
import PageContact from './pages/PageContact';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={PageHome} />
      <Route path="/about" component={PageAbout} />
      <Route path="/pics" component={PagePics} />
      <Route path="/contact" component={PageContact} />
    </Switch>
  );
}

export default App;
