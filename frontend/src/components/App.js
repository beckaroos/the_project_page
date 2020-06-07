import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />

        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));