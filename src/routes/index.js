import React ,{ Component } from 'react';
import { Route, Link } from 'react-router-dom';
//- routes config
import AppliedRoutes from './routes-applied';
import UnauthRoutes from './routes-unauth';
import AuthRoutes from './routes.loadable.js';
//- Render Custom
import UIRouteAuth from './components/AuthenticatedRoute';


/* 当前导航激活 */
export const UILinkCustom = ({label, to, exact}) => (
  <Route path={to} exact={exact} children={({match}) => (
    <div className={match ? 'active': ''}>
      <Link to={to}> {label} {match ? '>' : ''} </Link>
    </div>
    )}>
  </Route>
);

 
export { AppliedRoutes, UnauthRoutes, AuthRoutes, UIRouteAuth };