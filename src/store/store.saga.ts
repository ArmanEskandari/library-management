import {all, fork} from 'redux-saga/effects'
import {rootLibrarySaga} from "./Library/library.saga";
import {rootTableSaga} from "./Table/table.saga";

export function* rootStoreSaga(): any {
    return yield all([fork(rootTableSaga), fork(rootLibrarySaga)])
}