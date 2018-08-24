import React, { Component } from 'react';
import {
  BrowserRouter, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'

import logo from './logo.svg';
import './css/index.css';

// const history = createBrowserHistory();

function createRoute(name, page){
  return <div>
    {name}  {page} 
  </div>
}

const Home = (name) => createRoute(name, 'Home');
const Search = (name) => createRoute(name, 'Search');
const Detail = (name) => createRoute(name, 'Detail');
const NoMatch = ({location, match, history}) => (
  <div className="APP-404">
    <h3>No match form <code>{location.pathname}</code></h3>
  </div>
);

const routes = [
  {
    path: '/',
    label: 'Index',
    exact: true,
    sidebar: () => Home('sidebar'),
    main: () => Home('main')
  },
  {
    path: '/home',
    label: 'Home',
    sidebar: () => Home('sidebar'),
    main: () => Home('main')
  },
  {
    path: '/search',
    label: 'Search',
    sidebar: () => Search('sidebar'),
    main: () => Search('main')
  },
  {
    path: '/detail',
    label: 'Detail',
    sidebar: () => Detail('sidebar'),
    main: () => Detail('main')
  },
  {
    path: '/404',
    label: '404',
    sidebar: (props) => NoMatch(props),
    main: (props) => NoMatch(props)
  }
];

// 当前导航激活
const CustomLink = ({label, to, exact}) => (
  <Route path={to} exact={exact} children={({match}) => (
    <div className={match ? 'active': ''}>
      <Link to={to}> {label} {match ? '>' : ''} </Link>
    </div>
    )}></Route>
);

 
const RouterConfig = () => (
  <BrowserRouter >  
    <div className="App-container"> 
    <ul className="App-menus">
      {routes.map((route, index) => (
        <li key={index}>
        <CustomLink 
          key={index} 
          to={route.path} 
          exact={route.exact} 
          label={route.label}/>
        </li>
      ))}
    </ul>
    <Switch>
      <div className="App-content">
        {/* part-right */}
        <div className="content-sidebar">
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              exact={route.exact} 
              component={route.sidebar}/>
          ))}
        </div>
        {/* part-left */}
        <div className="content-main">
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              exact={route.exact} 
              component={route.main}/>
          ))}
         </div>  
         {/* /routes */}
      </div> 
    </Switch> 
    </div>
  </BrowserRouter>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><a href="/" className="App-logo"><img src={logo}  alt="logo" /></a>
            <span className="title">Welcome to React</span>
          </h1>
        </header>
        <div className="App-bodyer">
          <RouterConfig/>
        </div>
        <div className="App-footer">

        </div>
      </div>
    );
  }
}

export default App;
