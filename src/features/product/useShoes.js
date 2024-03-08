import { useQuery } from "@tanstack/react-query";
import { getShoes } from "../../services/apiShoes";

export function useShoes() {
  const {
    isLoading,
    data: shoes,
    error,
  } = useQuery({
    queryKey: ["shoes"],
    queryFn: getShoes,
  });

  return { isLoading, error, shoes };
}
