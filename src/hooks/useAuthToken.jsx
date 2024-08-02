import { useSelector } from "react-redux";

export const useAuthToken = () => {
  return useSelector((state) => state.auth.token); // Token'ın state'de nasıl saklandığınıza bağlı olarak değişir
};
