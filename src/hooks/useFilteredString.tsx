import { useSearchParams } from "react-router-dom";

export const QUERY_STRING_KEY = "id" as const;

type filteredStringType = "id";

export default function useFilteredString(key: string) {
  const [params, setParams] = useSearchParams();
  const filteredString = params.get(key)?.split(",") || [];

  const toggleFilter = (id: string) => {
    const isExisted = filteredString?.includes(id);

    if (isExisted) {
      const removeList = filteredString?.filter((item) => item !== id);
      setParams(`{key}=${encodeURIComponent(removeList?.join(","))}`);
    } else {
      filteredString.push(id);
      setParams(`${key}=${encodeURIComponent(filteredString.join(","))}`);
    }
  };
  return {
    filteredString,
    toggleFilter,
  };
}
