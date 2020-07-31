import React from 'react';
import { Switch, Route, useHistory, NavLink } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import NewBoard from './components/NewBoard.js';
import NewArticle from './components/NewArticle.js';
import Articles from './components/Articles.js';
import EditArticle from './components/EditArticle.js';
import styled from 'styled-components';
import LogoutDelBtn from './styled/LogoutDelBtn';
import Header from './styled/Header';

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  font-family: 'Roboto Slab', serif;
  text-decoration: none;
  letter-spacing: -1px;
  align-self: center;
  padding: 0.5%;

  &:hover {
    font-weight: bold;
  }

  &:active {
    color: coral;
    text-shadow: 2px 2px 6px black;
  }
`;

const App = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <div className='App'>
      <Header>
        {localStorage.getItem('token') ? (
          <>
            <StyledNavLink to='/dashboard' activeClassName='active-link'>
              Dashboard
            </StyledNavLink>
            <LogoutDelBtn onClick={handleLogout}>Logout</LogoutDelBtn>
          </>
        ) : (
          <>
            <StyledNavLink to='/login' activeClassName='active-link'>
              Login
            </StyledNavLink>
            <StyledNavLink to='/register' activeClassName='active-link'>
              Register
            </StyledNavLink>
          </>
        )}
      </Header>

      <Switch>
        <PrivateRoute
          exact
          path='/dashboard'
          component={Dashboard}
        ></PrivateRoute>
        <Route exact path='/new-board' component={NewBoard} />
        <Route exact path='/board/:id/new-article' component={NewArticle} />
        <Route exact path='/board/:id' component={Articles} />
        <Route exact path='/article/:id/edit' component={EditArticle} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
