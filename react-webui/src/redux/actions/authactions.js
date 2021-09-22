import {
  AUTHENTICATE_BEGIN,
  AUTHENTICATE_FAILURE,
  AUTHENTICATE_SUCCESSFULL,
  LOGOUT,
} from "./actiontype";
import { AuthCheck } from "../../services/service";
import { removeCookies, setCookie } from "../../util/sessionmanager";
import { useSelector } from "react-redux";

const authenticateSuccess = (data) => ({
  type: AUTHENTICATE_SUCCESSFULL,
  payload: { data },
});

const authenticateBegin = () => ({
  type: AUTHENTICATE_BEGIN,
});

const authenticateFailure = (error) => ({
  type: AUTHENTICATE_FAILURE,
  payload: { error },
});

const logout = () => ({
  type: LOGOUT,
});

function authenticate(username, password) {
  console.log("authenticate started ...");
  return (dispatch) => {
    return AuthCheck("testurl", { username, password })
      .then((response) => response)
      .then((data) => {
        if (data.status) {
          dispatch(authenticateSuccess(data));
          console.log("validation complete " + data.token);
          setCookie("session", data.token);
          setCookie("username", data.username);
        } else {
          console.log("validation complete log " + data.token);
          dispatch(authenticateFailure("Login failure"));
        }
      })
      .catch((error) => {
        console.error("error", error);
        dispatch(authenticateFailure("Technical error"));
      });
  };
}

function logoutuser() {
  console.log("logout begins..");
  return (dispatch) => {
    dispatch(logout());
  };
}

export { authenticate, authenticateBegin, logoutuser };
