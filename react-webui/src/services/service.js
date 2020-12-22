import {} from "../util/sessionmanager";

async function AuthCheck(url = "", data = {}) {
  console.log("Authcheck started...");
  var obj = JSON.parse(
    '{ "username":"John", "token":"xyz123", "status":true,"message":"test"}'
  );
  return obj;
}

export { AuthCheck };
