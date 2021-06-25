import api from "../services/api";
import { useFetch } from "./useFetch";

export function usePost() {
  const { data } = useFetch("/feeds", async () => {
    const { data } = await api.get("/feeds");

    return data;
  });

  return data
}
