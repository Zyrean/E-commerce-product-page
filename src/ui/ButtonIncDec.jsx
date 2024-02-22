import { useDispatch } from "react-redux";
import { increaseItem } from "../features/product/productSlice";

function ButtonIncDec() {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItem("men"));
  }

  return (
    <div className="flex items-center justify-between rounded-xl bg-stone-100 px-8 py-3">
      <button className="text-2xl font-bold text-orange-500">-</button>
      <span className="font-bold">0</span>
      <button
        className="text-2xl font-bold text-orange-500"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default ButtonIncDec;
