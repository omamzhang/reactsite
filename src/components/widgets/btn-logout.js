import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const BtnLoginOut = withRouter(({history}) => window.authStatus.isAuthenticated ? (
   <p>
     Welcome!{" "}
     <button onClick={() => {
       window.authStatus.signout(() => history.push('/'));
      }}> Sign out</button>
   </p>
  ): (
    <p>You are't logged in.</p>
  )
);

export default BtnLoginOut;