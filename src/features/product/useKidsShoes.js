import { useQuery } from "@tanstack/react-query";
import { getKidsShoes } from "../../services/apiShoes";

export function useKidsShoes() {
  const {
    isLoading,
    data: shoes,
    error,
  } = useQuery({
    queryKey: ["kidsShoes"],
    queryFn: getKidsShoes,
  });

  return { isLoading, error, shoes };
}
