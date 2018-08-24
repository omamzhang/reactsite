/**
 * 应用路由  无序鉴权-应用基础页面
 * ---------------------------
 * @404 {*} noMatch
 * @500 {*} server error
 * @intro {*} 关于我们 
 */
import React from 'react';


const NoMatch = ({location, match, history}) => (
  <div className="APP-404">
    <h3>No match form <code>{location.pathname}</code></h3>
  </div>
);

const ServerError = ({location, match, history}) => (
  <div className="APP-500">
    <h3>Server error form <code>{location.pathname}</code></h3>
  </div>
);

const AboutMe = ({location, match, history}) => (
  <div className="APP-about">
    <h3>About me <code>{location.pathname}</code></h3>
  </div>
);


/**
 * 应用路由
 */
const AppliedRoutes = [
   {
    path: '/intro',
    exact: true,
    label: '关于我们',
    component: (props) => AboutMe(props)
  },
  {
    path: '/404',
    exact: true,
    label: '未定义',
    component: (props) => NoMatch(props)
  },
  {
    path: '/500',
    exact: true,
    label: '服务异常',
    component: (props) => ServerError(props)
  }
];

export default AppliedRoutes;


