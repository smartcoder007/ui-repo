import {} from "../util/sessionmanager";

async function AuthCheck(url = "", data = {}) {
  console.log("Authcheck started...");
  var obj = JSON.parse(
    '{ "username":"John", "token":"xyz123", "status":true,"message":"test"}'
  );
  return obj;
}

async function GetApi(url = "") {
  console.log("Get Api call...");

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      Authorization: ``,
    },
  });

  return response.json();
}

export { AuthCheck, GetApi };
