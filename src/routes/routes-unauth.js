/**
 * 无鉴权路由  业务逻辑路由
 * -----------
 * @login {*}  登录
 * @logout {*}  登出
 */
import React, { Component } from 'react';
import PageLoadable from './components/LoadableComponent';

const LoginPage = PageLoadable(() => import('pages/login/index.js'));

export const UnauthRoutes = [
   {
    path: '/login',
    label: '登录',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    component: LoginPage
  },
  {
    path: '/logout',
    label: '登出',
    exact: true,
    layout: 'base', // 基础布局，所有布局均需要
    component: LoginPage
  },
  /* {
    path: '*',
    label: 'home',
    layout: 'base', // 基础布局，所有布局均需要
    component: HomePage
  } */
];

export default UnauthRoutes;