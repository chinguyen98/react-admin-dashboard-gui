const { default: axiosClient } = require("./axios-client")

export const signupApi = (email, password, name) => {
  const url = '/auth/sign-up';
  return axiosClient.post(url, { email, password, name });
}

export const signinApi = (email, password) => {
  const url = '/auth/sign-in';
  return axiosClient.post(url, { email, password });
}