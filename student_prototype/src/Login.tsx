import * as React from 'react';
import './App.css';

import LoginPage from './Components/Login/Login';

import {BrowserRouter as Router} from 'react-router-dom';

class Login extends React.Component {
  public render() {

    return (
        <Router>
            <LoginPage />
        </Router>
    );
  }
}

export default Login;
