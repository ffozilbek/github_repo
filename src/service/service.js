import { api } from "../api/axios";

export const getData = async (language) => {
  const { data } = await api.get(`language:${language}`);
  return data.items;
};
