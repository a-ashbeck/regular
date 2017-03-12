import {AuthenticatedRoute, HomeRoute, LoginRoute, Router}
  from 'react-stormpath';
import {IndexRoute, Route, browserHistory} from 'react-router';
import AuthLanding from '../components/AuthLanding';
import LoginPage from '../components/LoginPage';
import Main from '../components/main';
import Profile from '../components/Profile';
import React from 'react';
import RegistrationPage from '../components/RegistrationPage';
import ResetPasswordPage from '../components/ResetPasswordPage';
import UnAuthLanding from '../components/UnAuthLanding';

const Routes = () =>
    <Router history={ browserHistory }>
        <HomeRoute path="/" component={ Main }>
            <IndexRoute component={ UnAuthLanding } />
            <LoginRoute path="/login" component={ LoginPage } />
            <Route path="/forgot" component={ ResetPasswordPage } />
            <Route path="/register" component={ RegistrationPage } />
            <AuthenticatedRoute>
                <HomeRoute path="/home" component={ AuthLanding } />
                <Route path="/profile" component={ Profile } />
            </AuthenticatedRoute>
          </HomeRoute>
    </Router>

export default Routes;
