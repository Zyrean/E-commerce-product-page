import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  getProductById,
  getProductByType,
  increaseItem,
} from "./productSlice";
import ButtonAddCart from "../../ui/ButtonAddCart";

function ProductInformation({ type }) {
  const product = useSelector(getProductByType(type));
  const dispatch = useDispatch();

  // const product = useSelector(getProductById(id));

  console.log(product);

  const {
    company,
    name,
    description,
    price,
    amount,
    totalPrice,
    onSale,
    salePercent,
  } = product;

  function handleIncrease() {
    dispatch(increaseItem(type));
  }

  function handleDecrease() {
    if (amount === 1) return;
    dispatch(decreaseItem(type));
  }

  const colorType = type === "women" ? "bg-red-200" : "bg-green-300";

  return (
    // Iteminformation

    <div className="flex flex-col gap-4 lg:max-w-5xl lg:gap-6">
      <div className="flex items-center justify-between">
        <p className="font-bold uppercase tracking-wider text-orange-500">
          {company}
        </p>
        <div className={`rounded-lg ${colorType} px-2`}>
          <p className="text-green-900">{type}</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold lg:text-5xl">{name}</h1>
      <p className="font-medium text-stone-400 lg:text-lg">{description}</p>
      <div className="flex items-center justify-between space-y-6 lg:flex-col lg:items-start lg:space-y-2 ">
        <div className="flex items-center gap-4">
          <p className="text-3xl font-bold"> {`$${totalPrice}.00`}</p>
          <div className="rounded-md bg-orange-100 px-3">
            {onSale && (
              <span className="font-bold text-orange-500">{`${salePercent}%`}</span>
            )}
          </div>
        </div>
        {onSale && (
          <p className="font-bold text-stone-400 line-through">{`$${price}.00`}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-between rounded-xl bg-stone-100 px-8 py-3 lg:flex-1">
          <button
            className="text-2xl font-bold text-orange-500 hover:scale-125"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="font-bold">{amount}</span>
          <button
            className="text-2xl font-bold text-orange-500 hover:scale-125"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>

        <ButtonAddCart type={product} />
      </div>
    </div>
  );
}

export default ProductInformation;
