import React, { Component } from 'react';
import './CommentSection.css';
import './AddComment';
import PT from 'prop-types';
import AddComment from './AddComment';

class CommentSection extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: props.comments,
    }
  }
  
  addNewComment = (event, index) => {
    const commentToAdd = event.target.value;
    this.setState(prevState => ({
      comments: prevState[index].comments.concat({text: commentToAdd, username: 'mark'}),
    }))
  }

  render (){
    return (
      <div className="comment-section">
      <div className="published-comments">
        {this.state.comments.map(comment => (
          <div className="comments" key={comment.text}>
            <span className="commenter">{comment.username}</span> {comment.text}
          </div>
        ))}
      </div>
      <AddComment />
    </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PT.arrayOf(PT.object.isRequired).isRequired
};


export default CommentSection;
