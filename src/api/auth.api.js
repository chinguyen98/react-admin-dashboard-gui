const { default: axiosClient } = require("./axios-client")

export const signupApi = (email, password, name) => {
  const url = '/auth/sign-up';
  return axiosClient.post(url, { email, password, name });
}