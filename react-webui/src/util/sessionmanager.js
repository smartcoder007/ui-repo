import * as Cookies from "js-cookie";

const setCookie = (key, value) => {
  //eslint-disable-next-line no-console
  console.log(`setkey---${key}`, value);
  Cookies.remove(key);
  Cookies.set(key, value, { expires: 14 });
};

const removeCookies = (key) => {
  Cookies.remove(key);
};

const getCookies = (key) => {
  const sessionCookie = Cookies.get(key);
  //eslint-disable-next-line no-console
  console.log(`get key.... ${sessionCookie}`);
  if (sessionCookie === undefined) {
    return null;
  }
  return sessionCookie;
};

const getSessionCookies = () => {
  const sessionCookie = Cookies.get("session");
  //eslint-disable-next-line no-console
  console.log(`session.... ${sessionCookie}`);
  if (sessionCookie === undefined) {
    return null;
  }
  return sessionCookie;
};

export { getCookies, setCookie, getSessionCookies, removeCookies };
