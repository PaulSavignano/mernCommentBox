import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import DATA from '../data';
import style from './style';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return(
      <div>
        <h2>Comments:</h2>
        <CommentsList data={ DATA } />
        <CommentsForm />
      </div>
    )
  }
}

export default CommentBox;
