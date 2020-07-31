import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';
import Board from './Board';
import Masonry from 'react-masonry-css';
import CreateLink from '../styled/CreateLink'; 

const Dashboard = (props) => {
  const { fetchBoards, isLoading, message} = props,
        boards = Array.isArray(props.boards) ? props.boards : [];
  
  useEffect(() => {
    fetchBoards();
  }, [fetchBoards, message]);

  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
  };

  return (
    <div>
      <CreateLink to='/new-board'>Create new Board</CreateLink>

      {isLoading && <span className='loading'>Loading Boards...</span>}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {boards ? (
          boards.map((board) => <Board key={board.id} board={board} />)
        ) : (
          <span>no boards here</span>
        )}
      </Masonry>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.board.isLoading,
    boards: state.board.boards,
    message: state.board.message,
  };
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);
