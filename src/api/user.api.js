import axiosClient from "./axios-client";

export const getAllUsersApi = () => {
  const url = '/users';
  return axiosClient.get(url);
}