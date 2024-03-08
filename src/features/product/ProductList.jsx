import ProductListItem from "./ProductListItem";

function ProductList({ shoes }) {
  return (
    <ul className="flex flex-col gap-4 px-4 py-6">
      {shoes?.map((shoe) => (
        <ProductListItem key={shoe.id} shoe={shoe} />
      ))}
    </ul>
  );
}

export default ProductList;
