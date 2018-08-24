 import React, { Component } from 'react';

/*export default class Loading extends Component ({isLoading, error}){
  
  render() {
    return <div>
      loading ……
    </div>
  }
} */

const Loading = ({isLoading, error}) => {
  if(isLoading) {
    return <div>Loading ……</div>
  } else if(error) {
    return <div>Sorry, there was some problem loading the page.</div>
  } else {
    return null;
  }
  // ……
}

export default Loading;