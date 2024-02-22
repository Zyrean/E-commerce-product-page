import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";

function CartItem({ item }) {
  const { amount, img, price, name, id } = item;

  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(id));
  }

  const totalPrice = price * amount;

  return (
    <li className="flex items-center justify-center gap-4" value={id}>
      <div className="w-16 rounded-full">
        <img src={img} alt="" className="rounded-md" />
      </div>

      <div>
        <p className="text-sm font-medium leading-5 text-stone-500">
          {`${name} $${price}.00 x ${amount}`}
          <strong className="text-black"> {`$${totalPrice}.00`} </strong>
        </p>
      </div>

      <button onClick={handleDeleteItem}>
        <img src="../../../images/icon-delete.svg" alt="" className="h-4 w-5" />
      </button>
    </li>
  );
}

export default CartItem;
