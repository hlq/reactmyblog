import { takeEvery, put } from 'redux-saga/effects';
// 7. 引入 GET_INIT_LIST 类型
import { GET_INIT_LIST } from './actionTypes';
// 11. 将 TodoList.js 的 axios 引入迁移到 sagas.js 中
import axios from 'axios';
// 12. 引入 actionCreator.js 中的 initListAction
import { initListAction } from './actionCreators'

// 8. 使用 generator 函数
function* todoSaga() {
    // 9. 这行代码表示，只要我们接收到 GET_INIT_LIST 的类型，我们就执行 getInitList 方法
    yield takeEvery(GET_INIT_LIST, getInitList);
}

// 10. 定义 getInitList 方法
function* getInitList() {
    try {
        const url = 'api/headerList.json';
        const res = yield axios.get(url);
        const action = initListAction(res.data.list);
        // 15. 等 action 处理完之后，在执行 put 方法
        yield put(action);
    } catch (error) {
        console.log("接口请求失败，请检查 todolist 接口。");
    }

}

export default todoSaga;

