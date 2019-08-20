import {combineReducers} from 'redux-immutable';
// store/index.js 声明多个出口，其中 reducer 被重命名为headerReducer
import {reducer as headerReducer} from '../common/header/store';

// combine 结合 联合 合并
const reducer = combineReducers({
    header: headerReducer
});

export default reducer