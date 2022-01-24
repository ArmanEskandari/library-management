import {all, fork} from 'redux-saga/effects'
import {tableRootSaga} from "./Table/table.saga";

export function* rootStoreSaga(): any {
    return yield all([fork(tableRootSaga)])
}