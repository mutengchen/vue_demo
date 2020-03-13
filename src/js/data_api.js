import m_const from './webConst'
import {get} from "./api";
//获取普通的列表数据
export function getListData(data,successCallback,errorCallback) {
    get(m_const.APP.GET_LIST,data,successCallback,errorCallback);
}
//获取QL list数据
export  function getQLData(data,successCallback,errorCallback) {
    get(m_const.APP.GET_QL_LIST,data,successCallback,errorCallback);
}