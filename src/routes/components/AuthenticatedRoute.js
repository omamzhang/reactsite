/**
 * 鉴权路由设置
 */
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const UIRouteAuth = ({component: Component, ...rest }) => (
  <Route 
  {...rest}
  render={ 
    props => window.authStatus.isAuthenticated ? (
      <Component {...props} /> 
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
   )}
   />
);

export default UIRouteAuth;

