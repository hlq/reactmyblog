import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';




const sagaMiddleware = createSagaMiddleware();

// 4. 定义 composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// 5. 调用 composeEnhancers 进行多中间件处理
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(
    reducer,
    enhancer
);

// 7. 使用 todoSaga
sagaMiddleware.run(sagas);

export default store;



// import * as actionCreators from './actionCreators';
// import * as actionTypes from './actionTypes';

