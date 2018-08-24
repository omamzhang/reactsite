

import React, { Component } from 'react';
import asyncComponent from './components/AsyncComponent';

const HomePage = asyncComponent(() => import('pages/home/index.js'));
const TablePage = asyncComponent(() => import('pages/table/index.js'));
const DetailPage = asyncComponent(() => import('pages/detail/index.js'));
const ListPage = asyncComponent(() => import('pages/list/index.js'));
const ViewPage = asyncComponent(() => import('pages/view/index.js'));


function updateSidebar(route) {
  return <div>sidebar {route}</div>
}
const PartSidebar = (route) => updateSidebar(route);

function createRoute(name, page){
  return <div>
    {name}  {page} 
  </div>
}

const Login = (name) => createRoute(name, 'Login');
const NoMatch = ({location, match, history}) => (
  <div className="APP-404">
    <h3>No match form <code>{location.pathname}</code></h3>
  </div>
);

const CommonRoutes = [
  {
    path: '/login',
    label: '登录',
    layout: 'base', // 基础布局，所有布局均需要
    component: () => Login('login')
  }
];

const LayoutDefault = [
  {
    path: '/404',
    label: '400',
    layout: 'base', // 基础布局，所有布局均需要
    component: () => NoMatch()
  }
];
/**
 *  通用路由处理
 * AuthRoute      验证理由
 * UnauthRoute    非验证路由
 *  
 */


/**
 * 侧边栏布局
 * route propertity
 * ------
 * ...route native props
 * label       导航标题
 * sidebar     侧边栏组件
 * main        主体组件
 * isAuth      是否需要验证 默认 false
 * 
 */

const LayoutSidebar = [
  {
    path: '/',
    label: '工作台',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => PartSidebar('dashboard'),
    main: () => (<HomePage/>)
  },
  {
    path: '/home',
    label: '我的桌面',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => PartSidebar('home'),
    main: () => (<HomePage/>)
  },
  {
    path: '/table',
    label: '记录查询',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => PartSidebar('table'),
    main: () => (<TablePage/>)
  },
  {
    path: '/detail',
    label: '记录详情',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => PartSidebar('detail'),
    main: () => (<DetailPage/>)
  },
  {
    path: '/list',
    label: '单元列表',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => PartSidebar('list'),
    main: () => (<ListPage/>)
  },
  {
    path: '/view',
    label: '单元查看',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => PartSidebar('view'),
    main: () => (<ViewPage/>)
  }
  // …………
];
 
const routes = LayoutSidebar;
export default routes;

/* {   
  path: '/',
  component: App,
  indexRoute: { component: Dashboard },
  childRoutes: []
} */