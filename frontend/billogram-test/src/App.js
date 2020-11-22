import React, { Component, Fragment } from 'react';
import {API} from './constants';

class App extends Component {
  render() {
    return (
      <Fragment>
        <p>This is an incredibly complex react app!</p>
        <p>Server: {API}</p>
      </Fragment>
    );
  }
}

export default App;
