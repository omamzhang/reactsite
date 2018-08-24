import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


import './index.less';

 
function PageTitle(from) {
  if(from.pathname !== '/') {
    return <h2>You mast log in to view the page at {from.pathname} </h2>;
  } else {
    return <h2>Login page</h2>;
  }
}

export default class LoginPage extends Component {
    state = {
      redirectToReferrer: false
    };

    login = () => {
      window.authStatus.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    }

    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      const { redirectToReferrer } = this.state;

      if(redirectToReferrer) {
        return <Redirect to={from} />
      }

      return <div className='page-login'>
         <PageTitle></PageTitle>
         <div className='form-group'>
          <input type="text" name="userName" placeholder="请输入用户名"/>
         </div>
         <div  className='form-group'>
          <input type="password" name="userName" placeholder="请输入密码"/>
         </div>
         <div className="form-group">
          <button onClick={this.login}>Log in</button>
         </div>
      </div>
    }
  }
  