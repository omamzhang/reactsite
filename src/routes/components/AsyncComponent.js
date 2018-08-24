/**
 * 代码分割-异步加载组件（自定义）
 * --------------------------
 * 用法示例
 *  const HomePage = asyncComponent(() => import('pages/home/index.js'));
 *  <Route component={HomePage}/>
 */

import React, { Component } from "react";

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
    // ……
  }

  return AsyncComponent;
}
