// import {SEARCH_FOCUS_OR_BLUR} from './actionTypes';
import * as actionTypes from './actionTypes'
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocusOrBlur = () => ({
    type: actionTypes.SEARCH_FOCUS_OR_BLUR
})

const changeList = (data) => ({
    type: actionTypes.GET_LIST,
    data: fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        const url = "api/headerList.json";
        axios.get(url).then((res) => {
            if (res.data.code === 0){
                const data = res.data.list;
                data.length = 15;
                dispatch(changeList(data));
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}
