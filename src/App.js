import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignIn from './components/SignIn';
import CarInfo from './components/CarInfo';
import Create from './components/Create';
import Cabinet from './components/Cabinet';

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch >
        <Route path="/" component={Homepage} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signin" component={SignIn} exact/>
        <Route path="/carsinfo" component={CarInfo} exact/>
        <Route path="/create" component={Create} exact/>
        <Route path="/cabinet" component={Cabinet} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
