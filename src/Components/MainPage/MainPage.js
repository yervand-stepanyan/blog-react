import React from 'react';

import Header from '../Header/Header';
import Login from '../Authentication/Login/Login';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Header />
        <Login />
      </div>
    );
  }
}
