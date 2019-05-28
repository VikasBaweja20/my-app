const initialState = {
    loading: false,
    data: [],
    error: false,
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case 'FETCH_COURSES_REQUEST':
        return { ...state, loading: true };
  
      case 'FETCH_COURSES_SUCCESS':
        return { ...state, loading: false, data: payload };
  
      case 'FETCH_COURSES_FAIL':
        return { ...state, loading: false, error: payload };
  
      default:
        return state;
    }
  };
  