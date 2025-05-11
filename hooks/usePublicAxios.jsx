import axios from "axios";

const publicAxios = axios.create({
  baseURL: "http://localhost:4500",
});

const usePublicAxios = () => {
  return publicAxios;
};
export default usePublicAxios;
