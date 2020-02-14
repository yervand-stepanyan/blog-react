import React from 'react';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    const posts = localStorage.getItem('posts') || [];

    this.state = {
      posts
    };
  }

  render() {
    const { posts } = this.state;

    return <div>{posts}</div>;
  }
}
