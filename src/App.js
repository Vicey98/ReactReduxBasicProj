import React, { Component } from 'react';
import CounterPage from './components/CounterPage'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact={true} component = {CounterPage} />
      </Switch>
    </>
  );
}

export default App;