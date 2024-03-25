import {
  AUTHENTICATE_BEGIN,
  AUTHENTICATE_FAILURE,
  AUTHENTICATE_SUCCESSFULL,
  LOGOUT,
} from "../actions/actiontype";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
  loading: false,
  error: null,
  // authenticated: false,
  // isTokenAvailable: null,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_BEGIN:
      console.log("AUTHENTICATE_BEGIN");
      return {
        ...state,
        error: null,
        loading: true,
      };
    case AUTHENTICATE_SUCCESSFULL:
      console.log("AUTHENTICATE_SUCCESSFULL");
      localStorage.setItem("userInfo", JSON.stringify(action.payload.data));
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data,
      };
    case AUTHENTICATE_FAILURE:
      console.log("AUTHENTICATE_FAILURE");
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case LOGOUT:
      console.log("LOGOUT");
      localStorage.removeItem("userInfo");
      return { ...state, loading: false, userInfo: null };
    default:
      console.log("DEFAULT");
      return state;
  }
};

export { AppReducer };
