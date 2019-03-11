import getBaseUrl from "./baseUrl";

const baseUrl = getBaseUrl();

export const getUsers = () => get("users");

export const deleteUser = id => del(`users/${id}`);

const onSuccess = response => response.json();

const onError = error => console.log(error); // eslint-disable-line no-console

const get = url => fetch(baseUrl + url).then(onSuccess, onError);

// Can't call the function "delete" since it's a reserved word.
const del = url => {
  const request = new Request(baseUrl + url, { method: "DELETE" });

  return fetch(request).then(onSuccess, onError);
};
