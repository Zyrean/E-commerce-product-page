import { useQuery } from "@tanstack/react-query";
import { getMenShoes } from "../../services/apiShoes";

export function useMenShoes() {
  const {
    isLoading,
    data: shoes,
    error,
  } = useQuery({
    queryKey: ["menShoes"],
    queryFn: getMenShoes,
  });

  return { isLoading, error, shoes };
}
