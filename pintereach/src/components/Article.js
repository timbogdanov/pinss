import React from 'react';
import { connect } from 'react-redux';
import { deleteArticle } from '../actions';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ContentWrapper = styled.div`
  line-height: 125%;

  p {
    font-size: 0.8rem;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .title {
    color: indianred;
    text-transform: capitalize;
    font-family: 'Roboto Slab', serif;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .url {
    font-size: 1rem;
    color: indianred;
    font-weight: bold;
    margin-bottom: 5%;
  }
`;

const Article = (props) => {
  return (
    <div className='board-wrapper'>
      <ContentWrapper>
        <p className='title'>{props.article.title}</p>
        <hr />
        <p>By: {props.article.author}</p>
        <p className='url'>{props.article.url}</p>
        <Link to={`/article/${props.article.id}/edit`}>Edit</Link>
        <button onClick={() => props.deleteArticle(props.article.id)}>
          Delete
        </button>
      </ContentWrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.article.isLoading,
    articles: state.article.articles,
  };
};

export default connect(mapStateToProps, { deleteArticle })(Article);
