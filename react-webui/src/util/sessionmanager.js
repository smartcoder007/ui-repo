import * as Cookies from "js-cookie";

const setCookie = (key, value) => {
  console.log(`set cookie---${key}`, value);
  Cookies.remove(key);
  Cookies.set(key, value, { expires: 14 });
};

const removeCookies = (key) => {
  console.log(`remove cookie---${key}`, key);
  Cookies.remove(key);
};

const getCookies = (key) => {
  const sessionCookie = Cookies.get(key);
  console.log(`get cookie.... ${sessionCookie}`);
  if (sessionCookie === undefined) {
    console.log(`get cookie is null....`);
    return null;
  }
  return sessionCookie;
};

const getSessionCookies = () => {
  const sessionCookie = Cookies.get("session");
  console.log(`session.... ${sessionCookie}`);
  if (sessionCookie === undefined) {
    console.log(`getSessionCookies is null....`);
    return null;
  }
  return sessionCookie;
};

export { getCookies, setCookie, getSessionCookies, removeCookies };
