import { useShoes } from "../features/product/useShoes";
import ProductListItem from "../features/product/ProductListItem";
import { useEffect } from "react";
import { getShoes } from "../services/apiShoes";

function Kids() {
  const { isLoading, error, shoes } = useShoes();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul className="flex flex-col gap-4 px-4 py-6">
          {shoes?.map((shoe) => (
            <ProductListItem key={shoe.id} shoe={shoe} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Kids;
