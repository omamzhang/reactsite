import React, { Component } from 'react';

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

/**
 * layoutPropsMap  <map>  布局对应属性 对应 routes
 * routes  <[routeExt]> 对象-布局路由组合优先级  routes.layout<string> > routes.layouts<Array>
 * ------
 * - layout  pages- Dashboard | Home | 404 | 500 | Login ……
 * - layouts pages- Business | Special | Theme | Active 
 * initRoutes <function> 初始化路由设置，按照layoutMap组合布局路由设置对象
 * 
 * initRoutesCompile <function> 不同的布局路由渲染
 */



// [layout] （样式调整）
// [path]  layout   [layout]={props}  以路由为维度 （逻辑调整）
const LayoutPropsMap = {
  default: ['main'],
  sidebar: ['sidebar', 'main'],
  flow: ['header', 'main', 'footer']
}

const routes = [
  {
    path: '/',
    label: '工作台',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => Home('sidebar'),
    main: () => Home('main')
  },
  {
    path: '/home',
    label: '我的桌面',
    layout: 'base', // 基础布局，所有布局均需要
    layouts: ['default', 'sidebar', 'flow'], // 多个
    sidebar: () => Home('sidebar'),
    main: () => Home('main')
  },
  {
    path: '/search',
    label: '功能查询',
    layouts: ['default', 'sidebar'], // 多个
    sidebar: () => Search('sidebar'),
    main: () => Search('main')
  },
  {
    path: '/edit',
    label: '功能编辑',
    layouts: ['default', 'sidebar'], // 多个
    sidebar: () => Detail('sidebar'),
    main: () => Detail('main')
  },
  {
    path: '/detail',
    label: '功能详情',
    layouts: ['default', 'sidebar'], // 多个
    sidebar: () => Detail('sidebar'),
    main: () => Detail('main')
  },
    {
    path: '/view',
    label: '信息查看',
    layouts: ['default', 'sidebar'], // 多个
    sidebar: () => Detail('sidebar'),
    main: () => Detail('main')
  }
];

 
export default routes;