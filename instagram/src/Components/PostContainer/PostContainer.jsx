import React from 'react';
import styled from 'styled-components';
import instagramStyles from '../../Styles';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

const PostWrapper = styled.div`
  width: ${instagramStyles.post.width};
  margin: ${instagramStyles.margin.default};
  padding: ${instagramStyles.padding.slimline};
  padding-bottom: ${instagramStyles.padding.bottomStandard};
`;

const PostHeader = styled.div`
  height: ${instagramStyles.post.headerHeight};
  display: ${instagramStyles.display.default};
  align-items: ${instagramStyles.display.alignPrimary};
  padding: ${instagramStyles.padding.standard};

  img {
    width: ${instagramStyles.width.thumbnail};
    border-radius: ${instagramStyles.roundedImages.borderRadius};
  }

  h1 {
    padding-left: ${instagramStyles.padding.leftStandard};
    font-weight: ${instagramStyles.font.altWeight};
    font-size: ${instagramStyles.font.standard};
  }
`;

const SpreadImage = styled.img`
  max-width: ${instagramStyles.spreadImages.maxWidth};
  max-height: ${instagramStyles.spreadImages.maxHeight};
`;

const CommentWrapper = styled.div`
  padding: ${instagramStyles.padding.standard};

  img {
    width: ${instagramStyles.width.logoStandard};
    cursor: ${instagramStyles.hover.cursor};
  }
`;

const Likes = styled.p`
  line-height: ${instagramStyles.lineHeight.primary};
  font-size: ${instagramStyles.font.standard};
  font-weight: ${instagramStyles.font.altWeight};
`;

export default function PostContainer({
  postData,
  commentInput,
  onCommentChange,
  addNewComment,
  id,
  selectedPost,
  incrementLikes,
}) {
  return (
    <PostWrapper>
      <PostHeader>
        <img src={postData.thumbnailUrl} alt="thumbnail" />
        <h1>{postData.username}</h1>
      </PostHeader>
      <SpreadImage src={postData.imageUrl} alt="capture" />
      <CommentWrapper>
        <img
          src={require('./PostContainerAssets/instagram-heart.png')}
          onClick={() => incrementLikes(id)}
          alt="heart"
          id={id}
        />
        <img
          src={require('./PostContainerAssets/instagram-comment.png')}
          alt="comment"
        />
        <Likes>{`${postData.likes} likes`}</Likes>
        <CommentSection
          comments={postData.comments}
          commentInput={commentInput}
          onCommentChange={onCommentChange}
          addNewComment={addNewComment}
          id={id}
          selectedPost={selectedPost}
          postData={postData}
        />
      </CommentWrapper>
    </PostWrapper>
  );
}

PostContainer.propTypes = {
  postData: PropTypes.object.isRequired,
  commentInput: PropTypes.string,
  onCommentChange: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedPost: PropTypes.number.isRequired,
  incrementLikes: PropTypes.func.isRequired,
};
