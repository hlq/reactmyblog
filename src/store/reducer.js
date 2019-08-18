import {combineReducers} from 'redux';
import headerReducer from '../common/header/store/reducer';

// combine 结合 联合 合并
const reducer = combineReducers({
    header: headerReducer
});

export default reducer