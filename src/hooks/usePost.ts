import api from "../services/api";
import { useFetch } from "./useFetch";

export function usePost() {
  const { data } = useFetch("/feeds", async () => {
    try {
      const { data } = await api.get("/feeds");
      return data;
    } catch (error) {
      throw new Error("Ocorreu um erro");
    }
  });

  return data;
}
