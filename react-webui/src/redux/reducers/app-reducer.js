import {
  AUTHENTICATE_BEGIN,
  AUTHENTICATE_FAILURE,
  AUTHENTICATE_SUCCESSFULL,
} from "../actions/actiontype";

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_BEGIN:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AUTHENTICATE_SUCCESSFULL:
      console.log("AUTHENTICATE_SUCCESSFULL");
      return {
        ...state,
        error: null,
        userInfo: action.payload.data,
      };
    case AUTHENTICATE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export { AppReducer };
