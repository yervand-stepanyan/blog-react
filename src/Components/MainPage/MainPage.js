import React from 'react';

import Header from '../Header/Header';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Header />
      </div>
    );
  }
}
