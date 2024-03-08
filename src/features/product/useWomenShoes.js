import { useQuery } from "@tanstack/react-query";
import { getWomenShoes } from "../../services/apiShoes";

export function useWomenShoes() {
  const {
    isLoading,
    data: shoes,
    error,
  } = useQuery({
    queryKey: ["womenShoes"],
    // queryFn: getWomenShoes,
  });

  return { isLoading, error, shoes };
}
