import React, { Component } from 'react';
//- routes
import {
  BrowserRouter, 
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory' // BrowserRouter

// import routes from './routes.demo.js';
// import routes from './routes/routes';
// import routes from './routes/routes.async';
// 路由配置， 当前导航激活导航
import { AuthRoutes, UnauthRoutes, AppliedRoutes, UILinkCustom, UIRouteAuth } from './routes/index';


//- static
// import logo from './logo.svg';
import logo from './logo.png';
import 'styles/index.less';
//- unit component 
import BtnLogout from 'components/widgets/btn-logout';

//- status 共享状态
window.authStatus = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};



function SidebarRouteInit() {
  return <div className="App-content">
        {/* part-right */}
        <div className="content-sidebar">
          {AuthRoutes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              exact={route.exact} 
              component={route.sidebar}/>
          ))}
        </div>
        {/* part-left */}
        <div className="content-main">
          {AuthRoutes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              exact={route.exact} 
              component={route.main}/>
          ))} 
        </div>
  </div>;
}

function DefaultRouteInit() {
  return <div className="App-content">
        {/* part-main */}
        {/* <div className="content-main"> */}
          {AuthRoutes.map((route, index) => (
            route.isAuth ? (
              <Route 
                key={index} 
                path={route.path} 
                exact={route.exact} 
                component={route.main}/>
            ) : (
              <UIRouteAuth
                key={index} 
                path={route.path} 
                exact={route.exact} 
                component={route.main}/>
            )
          ))}
        {/* </div> */}
       </div>;
}


{/*
   <BrowserRouter >
    <Switch>
      <Route render={() => <Layout1/>}></Route>
      <Route render={() => <Layout2/>}></Route>
    </Switch>
  </BrowserRouter >   
 */}

 
//- Auth App
function LayoutSidebar({ routes }){
  return <div className="App-wapper"> 
    <header className="App-header">
      <h1 className="App-title"><a href="/" className="App-logo"><img src={logo}  alt="logo" /></a>
        <span className="title">Welcome to React</span>
      </h1>
    </header>
    <div className="App-bodyer">
      <div className="App-container"> 
          <ul className="App-menus">
            {routes.map((route, index) => (
              <li key={index}>
              <UILinkCustom 
                key={index} 
                to={route.path} 
                exact={route.exact} 
                label={route.label}/>
              </li>
            ))}
          </ul>
          <Switch> 
            <DefaultRouteInit/>
          </Switch> 
        </div>
    </div>
    <div className="App-footer"></div>
  </div>;
}

const emptyRoutes = [...UnauthRoutes, ...AppliedRoutes];
const RouterConfig = () => (
  <BrowserRouter >
    <Switch>
        {/* <LayoutEmpty routes={emptyRoutes}/> */}
      {emptyRoutes.map((route, index) => (
        <Route 
          key={index}
          {...route}
        />
      ))}
      <Route path='/'  render={() => 
        <LayoutSidebar routes={AuthRoutes}/>
      } />
    </Switch>
  </BrowserRouter>
);

class AppAuth extends Component {
  render() {
    return (
      <div className="App">
        <RouterConfig/>
      </div>
    );
  }
}


//- Guest App
function LayoutSidebarGuest({ routes }){
  return <div className="App-container"> 
        <ul className="App-menus">
          {routes.map((route, index) => (
            <li key={index}>
            <UILinkCustom 
              key={index} 
              to={route.path} 
              exact={route.exact} 
              label={route.label}/>
            </li>
          ))}
        </ul>
        <Switch> 
          <DefaultRouteInit/>
        </Switch> 
      </div>;
}

const GuestRouterConfig = () => (
  
    <Switch>
        {/* <LayoutEmpty routes={emptyRoutes}/> */}
      {emptyRoutes.map((route, index) => (
        <Route 
          key={index}
          {...route}
        />
      ))}
      <Route path='/'  render={() => 
        <LayoutSidebarGuest routes={AuthRoutes}/>
      } />
    </Switch>
);

/**
 * Role
 * Page layout
 */
class AppGuest extends Component {
  render() {
    return (
      <BrowserRouter >
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><a href="/" className="App-logo"><img src={logo}  alt="logo" /></a>
            <span className="title">Welcome to React</span>
          </h1>
          <div className="App-helper">
            <BtnLogout/>
          </div>
        </header>
        <div className="App-bodyer">
          <GuestRouterConfig/>
        </div>
        <div className="App-footer"></div>
      </div>
      </BrowserRouter>
    );
  }
}



const App = AppGuest;
export default App;
