import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => (
          <li key={i}>
          <p onClick={() => console.log(JSON.stringify(post.preview.images[0].source.url)) } >{post.title}</p>
          <a target="blank" href={post.url}>{post.url}</a>
          
            {
              //todo: render preview img
            }
          
          </li>
        ))}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

//preview.images[0].source.url