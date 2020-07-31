import { combineReducers } from 'redux';

import boardReducer from './boardReducer';
import articleReducer from './articleReducer';

export const rootReducer = combineReducers({
  board: boardReducer,
  article: articleReducer,
});
