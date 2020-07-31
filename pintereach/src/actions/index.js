import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_BOARDS_START = 'FETCH_BOARDS_START';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';

export const NEW_BOARD_START = 'NEW_BOARD_START';
export const NEW_BOARD_SUCCESS = 'NEW_BOARD_SUCCESS';
export const NEW_BOARD_ERROR = 'NEW_BOARD_ERROR';

export const FETCH_ARTICLES_START = 'FETCH_ARTICLES_START';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const PATCH_ARTICLE_SUCCESS = 'PATCH_ARTICLE_SUCCESS';

export const CREATE_ARTICLE = 'CREATE_ARTICLE';

export const DELETE_BOARD = 'DELETE_BOARD';

export const SELECT_BOARD = 'SELECT_BOARD';

export const selectBoard = (boardId) => (dispatch) => {
  dispatch({ type: SELECT_BOARD, payload: boardId });
};

export const fetchBoards = () => (dispatch) => {
  dispatch({
    type: FETCH_BOARDS_START,
  });
  axiosWithAuth()
    .get('/boards')
    .then((res) => {
      dispatch({ type: FETCH_BOARDS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_BOARDS_ERROR, payload: err.message });
    });
};

export const postBoard = (content) => (dispatch) => {
  dispatch({
    type: NEW_BOARD_START,
  });
  axiosWithAuth()
    .post('/boards', content)
    .then((res) => {
      dispatch({ type: NEW_BOARD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: NEW_BOARD_ERROR, payload: err.message });
    });
};

export const deleteBoard = (boardId) => (dispatch) => {
  axiosWithAuth()
    .delete(`/boards/${boardId}`)
    .then((res) => {
      dispatch({ type: DELETE_BOARD, payload: res.data });
    });
};

export const fetchArticles = (boardId) => (dispatch) => {
  dispatch({
    type: FETCH_ARTICLES_START,
  });
  axiosWithAuth()
    .get(`/articles/from/${boardId}`)
    .then((res) => {
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_ARTICLES_ERROR, payload: err.message });
    });
};

export const postArticle = (values, boardId) => (dispatch) => {
  axiosWithAuth()
    .post(`/articles`, { ...values, board_id: boardId })
    .then((res) => {
      dispatch({ type: CREATE_ARTICLE, payload: res.data });
    });
};

export const deleteArticle = (articleId) => (dispatch) => {
  axiosWithAuth()
    .delete(`articles/${articleId}`)
    .then((res) => {});
};

export const fetchArticle = (articleId, board_id) => (dispatch) => {
  axiosWithAuth()
    .get(`/articles/${articleId}`, { board_id: board_id })
    .then((res) => {
      dispatch({ type: FETCH_ARTICLE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putArticle = (articleId, content) => (dispatch) => {
  axiosWithAuth()
    .patch(`/articles/${articleId}`, content)
    .then((res) => {
      console.log('updated', res);
      dispatch({ type: PATCH_ARTICLE_SUCCESS, payload: res.data });
    });
};
