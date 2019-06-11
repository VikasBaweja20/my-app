import { connect } from 'react-redux';
import home from './home';
import * as types from '../../constants/actionTypes';

const mapStateToProps = state => ({
  authors: state.authors,
  courses: state.courses,
  loading:
    state.loading.FETCH_AUTHORS ||
    state.loading.FETCH_COURSES ||
    state.loading.SAVE_COURSES ||
    state.loading.EDIT_COURSES ||
    state.loading.DELETE_COURSES ||
    false,
});

const mapDispatchToProps = dispatch => ({
  fetchAuthors: () => dispatch({ type: 'FETCH_AUTHORS_REQUEST' }),
  fetchCourses: () => dispatch({ type: `${types.FETCH}_${types.COURSES}_${types.REQUEST}` }),
  saveCourses: payload =>
    dispatch({ type: `${types.SAVE}_${types.COURSES}_${types.REQUEST}`, payload }),
  editCourse: payload =>
    dispatch({ type: `${types.EDIT}_${types.COURSES}_${types.REQUEST}`, payload }),
  deleteCourses: payload =>
    dispatch({ type: `${types.DELETE}_${types.COURSES}_${types.REQUEST}`, payload }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(home);
