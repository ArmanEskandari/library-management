import {all, call, takeLatest} from 'redux-saga/effects'

function* initSaga() {
    yield call(() => console.log('Hello Saga!'))
}

export function* tableRootSaga() {
    yield all([takeLatest('INIT_SAGA', initSaga)])
}