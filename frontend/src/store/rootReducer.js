import { combineReducers } from 'redux';
import gamesReducer from './games/actionCreators';

export default combineReducers({
    games: gamesReducer,
});