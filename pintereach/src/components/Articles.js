import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, deleteBoard } from '../actions';
import Article from './Article';
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import CreateLink from '../styled/CreateLink';
import LogoutDelBtn from '../styled/LogoutDelBtn';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Articles = (props) => {
  useEffect(() => {
    props.fetchArticles(props.match.params.id);
  }, [props.article]);

  const breakpointColumnsObj = {
    default: 6,
    1100: 4,
  };

  const handleDelete = (e) => {
    e.preventDefault();

    props.deleteBoard(props.match.params.id);
    props.history.push('/dashboard');
  };

  console.log(props.articles);

  return (
    <>
      <StyledWrapper>
        <CreateLink to={`/board/${props.match.params.id}/new-article`}>
          Create new Article
        </CreateLink>
        <LogoutDelBtn onClick={handleDelete}>Delete Board</LogoutDelBtn>
      </StyledWrapper>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {props.articles &&
          props.articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
      </Masonry>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.article.isLoading,
    articles: state.article.articles,
  };
};

export default connect(mapStateToProps, { fetchArticles, deleteBoard })(
  Articles
);
