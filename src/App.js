import React, { Fragment,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
// import setAuthToken from './utils/setAuthToken';
import store from './store';
import Alert from './containers/layout/Alert';
import Navbar from './containers/layout/Navbar';
import Landing from './containers/layout/Landing';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import './App.css';

const App = () => {
  
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar> </Navbar>
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert/>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
};
export default App;
