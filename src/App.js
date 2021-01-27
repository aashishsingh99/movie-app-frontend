import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import setAuthToken from './utils/setAuthToken';
import store from './store';
import Alert from './containers/layout/Alert';
import Navbar from './containers/layout/Navbar';
import Landing from './containers/layout/Landing';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import PrivateRoute from './containers/routing/PrivateRoute';
import './components/busPage/modal.css'
import Dashboard from './containers/dashboard/Dashboard';

import './App.css';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { LOGOUT } from './actions/types';
import ViewCurBuses from './containers/bus/ViewCurBuses';
import FindBus from './containers/bus/FindBus';
import AddBus from './containers/bus/AddBus';
import BusPage from './containers/busPage/BusPage';
if (localStorage.token) {
  console.log('heyyyyBrother');
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar> </Navbar>
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/buses' component={ViewCurBuses} />
              <PrivateRoute exact path='/findBus' component={FindBus} />
              <PrivateRoute exact path='/addBus' component={AddBus} />
              <PrivateRoute exact path="/buses/:id" component={BusPage} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
