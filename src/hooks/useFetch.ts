import useSWR from "swr";

const apiUrl = process.env.REACT_APP_API_URL as string

export function useFetch(url: string, fetcher: any) {
  const { data, error } = useSWR(
    apiUrl + url,
    fetcher
  );

  return { data, error };
}
