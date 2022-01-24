import {all, fork} from 'redux-saga/effects'
import {tableRootSaga} from "./Table/table.saga";
import {rootLibrarySaga} from "./Library/library.saga";

export function* rootStoreSaga(): any {
    return yield all([fork(tableRootSaga), fork(rootLibrarySaga)])
}