import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./organisms/PrivateRoute";
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/login"
              render={(props) => <Welcome {...props} formType={'login'} />}
            />
            <Route exact path="/register"
              render={(props) => <Welcome {...props} formType={'register'} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));