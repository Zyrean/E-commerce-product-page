import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/CartSlice";
import { getProductByType } from "../features/product/productSlice";

function ButtonAddCart({ type }) {
  const dispatch = useDispatch();

  const { name, totalPrice, amount } = useSelector(getProductByType(type.type));

  function handleAddItem() {
    let test = Math.floor(Math.random() * 1000) + 1;

    const newItem = {
      id: test,
      name,
      price: totalPrice,
      amount: amount,
      // totalPrice: 123456,
      img: `../../../images/image-product-1-thumbnail.jpg`,
    };

    dispatch(addItem(newItem));
  }

  return (
    <button
      className="rounded-xl bg-orange-400 px-4 py-4 shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 hover:duration-500 lg:flex-auto lg:hover:scale-105"
      onClick={handleAddItem}
    >
      <div className="flex justify-center gap-4 text-white">
        <img src="../../images/icon-cart.svg" alt="" className="h-5 w-5" />
        <p className="font-bold text-white">Add to cart</p>
      </div>
    </button>
  );
}

export default ButtonAddCart;
