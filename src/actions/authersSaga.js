// eslint-disable-next-line object-curly-newline
import { all, takeEvery, call, put } from 'redux-saga/effects';

function* getAuthors() {
  try {
    const url = 'http://localhost:3004/authors';
    const res = yield call(fetch, url);
    const authors = yield res.json();
    yield put({ type: 'FETCH_AUTHORS_SUCCESS', payload: authors });
  } catch (error) {
    yield put({ type: 'FETCH_AUTHORS_FAIL', payload: error });
  }
}

function* authorsRequest() {
  yield takeEvery('FETCH_AUTHORS_REQUEST', getAuthors);
}

export default function* init() {
  yield all([authorsRequest()]);
}
