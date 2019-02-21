import React, { Component } from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import moment from 'moment';

// Styled-Components
const PublishedComments = styled.div`
  line-height: 1.5;
  font-size: 14px;
  padding-bottom: 0.5%;
`;

const Commenter = styled.div`
  font-weight: bold;
`;

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      typed: '',
      trutthy: true
    };
  }

  onInputChange = event => {
    this.setState({
      typed: event.target.value
    });
  };

  addNewComment = event => {
    event.preventDefault();
    this.setState(prevState => ({
      comments: prevState.comments.concat({
        username: localStorage.getItem('username').replace(/['"]+/g, ''),
        text: this.state.typed
      })
    }));
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      typed: ''
    });
  };

  render() {
    return (
      <div className="comment-section">
        <PublishedComments>
          {this.state.comments.map(comment => (
            <div className="comments" key={comment.text}>
              <div>
                <Commenter>{comment.username}</Commenter>
                {comment.text}
              </div>
            </div>
          ))}
        </PublishedComments>
        <span className="time-stamp">
          {moment(this.props.time, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
        </span>
        <div className="add-comment-divider" />
        <form onSubmit={event => this.addNewComment(event)}>
          <input
            onChange={event => this.onInputChange(event)}
            value={this.state.typed}
            className="add-comment"
            placeholder="Add a comment..."
          />
        </form>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PT.arrayOf(PT.object.isRequired).isRequired
};

export default CommentSection;
