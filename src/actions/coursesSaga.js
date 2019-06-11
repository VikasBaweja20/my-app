// eslint-disable-next-line object-curly-newline
import { all, takeEvery, call, put } from './node_modules/redux-saga/effects';

function* getCourses() {
  try {
    const url = 'http://localhost:3004/courses';
    const res = yield call(fetch, url);
    const courses = yield res.json();
    yield put({ type: 'FETCH_COURSES_SUCCESS', payload: courses });
  } catch (error) {
    yield put({ type: 'FETCH_COURSES_FAIL', payload: error });
  }
}

function* coursesRequest() {
  yield takeEvery('FETCH_COURSES_REQUEST', getCourses);
}

export default function* init() {
  yield all([coursesRequest()]);
}
