import {
  AUTHENTICATE_BEGIN,
  AUTHENTICATE_FAILURE,
  AUTHENTICATE_SUCCESSFULL,
} from "./actiontype";
import { AuthCheck } from "../../services/service";
import { removeCookies, setCookie } from "../../util/sessionmanager";

const authenticateSuccess = (data) => ({
  type: AUTHENTICATE_SUCCESSFULL,
  payload: { data },
});

const authenticateBegin = (data) => ({
  type: AUTHENTICATE_BEGIN,
});

const authenticateFailure = (error) => ({
  type: AUTHENTICATE_FAILURE,
  payload: { error },
});

function authenticate(username, password) {
  console.log("authenticate started ...");
  return (dispatch) => {
    return AuthCheck("testurl", { username, password })
      .then((response) => response)
      .then((data) => {
        if (data.status) {
          dispatch(authenticateSuccess(data));
          console.log("validation complete ${data.token}");
          setCookie("session", data.token);
          setCookie("username", data.username);
        } else {
          console.log("validation complete ${data.token}");
          dispatch(authenticateFailure("Login failure"));
        }
      })
      .catch((error) => {
        console.error("error", error);
        dispatch(authenticateFailure("Technical error"));
      });
  };
}

export { authenticate, authenticateBegin };
