import apiFetch from "./api-fetch";
import { tokenKey } from "../config";

export function login(credentials) {
  return apiFetch("/login", { body: credentials }).then((res) => {
    const { token, ...user } = res;
    sessionStorage.setItem(tokenKey, token);
    sessionStorage.setItem("userId", user.id);
    return user;
  });
}

export function logout() {
  return apiFetch("/logout", { method: "GET" }).then(() => {
    sessionStorage.clear();
    localStorage.clear();
  });
}
