import ProductList from "../features/product/ProductList";
import { useKidsShoes } from "../features/product/useKidsShoes";
// import { useWomenShoes } from "../features/product/useWomenShoes";

function Kids() {
  const { isLoading, error, shoes } = useKidsShoes();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ProductList shoes={shoes} />
      )}
    </>
  );
}

export default Kids;
