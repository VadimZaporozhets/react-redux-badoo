import {combineReducers} from 'redux';
import matchesReducer from './matches-reducer';
import filterReducer from './filter-reducer';
import profileReducer from './profile-reducer';

export default combineReducers({
    matchesInfo: matchesReducer,
    filterParams: filterReducer,
    profileInfo: profileReducer
});
