import jwt_decode from "jwt-decode";

function saveToken(access_token: string) {
  localStorage.setItem("access_token", access_token);
}

function getToken() {
  let token = localStorage.getItem("access_token");
  try {
    if (typeof token === "string") {
      return jwt_decode(token);
    }
  } catch (error) {}
}

function destroyToken() {
  localStorage.removeItem("rememberMe");
  window.location.pathname = "/login";
}

export { saveToken, getToken, destroyToken };
