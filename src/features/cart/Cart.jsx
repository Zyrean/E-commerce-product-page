import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import ButtonDefault from "../../ui/ButtonDefault";
import { deleteAllItems } from "./CartSlice";
import { useEffect, useRef } from "react";

function Cart() {
  const dispatch = useDispatch();
  const ref = useRef();
  const cart = useSelector((state) => state.cart.cart);
  const emptyCart = cart.length === 0;
  console.log(cart);

  function handleClearCart() {
    dispatch(deleteAllItems());
  }

  // useEffect(
  //   function () {
  //     function handleClick(e) {
  //       if (ref.current && !ref.current.contain(e.target)) close();
  //     }

  //     document.addEventListener("click", handleClick, true);

  //     return () => document.removeEventListener("click", handleClick, true);
  //   },
  //   [close],
  // );

  return (
    <div
      ref={ref}
      className="absolute right-2 top-20 z-50 mx-2 rounded-lg bg-white py-6 shadow-md lg:top-28 lg:max-w-sm"
    >
      <div className="border-b">
        <p className="px-6 pb-6 font-extrabold ">Cart</p>
      </div>

      {emptyCart ? (
        <p className="mx-24 py-14 text-center font-bold text-stone-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="px-6">
          <ul className="flex flex-col gap-6 py-6">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>

          <ButtonDefault onclick={handleClearCart}>Clear all</ButtonDefault>
        </div>
      )}
    </div>
  );
}

export default Cart;
