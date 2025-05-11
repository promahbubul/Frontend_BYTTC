import axios from "axios";

const usePrivetAxios = (token) => {
    
  const privetAxios = axios.create({
    baseURL: "http://localhost:4500",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return privetAxios;
};
export default usePrivetAxios;
