import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './containers/layout/Alert';
import Navbar from './containers/layout/NavbarContainer';
import Landing from './containers/layout/Landing';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import PrivateRoute from './containers/routing/PrivateRoute';
import './components/moviePage/modal.css'
import Dashboard from './containers/dashboard/Dashboard';

import './App.css';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { LOGOUT } from './actions/types';
import ViewCurMovies from './containers/movie/ViewCurMovies';
import FindMovie from './containers/movie/FindMovie';
import AddMovie from './containers/movie/AddMovie';
import MoviePage from './containers/moviePage/MoviePage';
if (localStorage.token) {
  
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
              <PrivateRoute exact path='/movies' component={ViewCurMovies} />
              
              <PrivateRoute exact path='/addMovie' component={AddMovie} />
              <PrivateRoute exact path="/movies/:id" component={MoviePage} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
