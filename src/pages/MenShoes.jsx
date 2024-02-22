import ButtonImage from "../ui/ButtonImage";
import ProductInformation from "../features/product/ProductInformation";
import { useState } from "react";

function MenShoes() {
  const [imgIndex, setImgIndex] = useState(1);

  function handleIncImgIndex() {
    if (imgIndex === 4) return;
    setImgIndex((imgIndex) => imgIndex + 1);
  }

  function handleDecImgIndex() {
    if (imgIndex === 1) return;
    setImgIndex((imgIndex) => imgIndex - 1);
  }

  return (
    <>
      <div className="relative">
        <img src={`../../public/images/image-product-${imgIndex}.jpg`} alt="" />
        <div className="absolute bottom-1/2 flex w-full justify-between px-4">
          <div className="flex w-full justify-between">
            <ButtonImage type="previous" onHandleImgIndex={handleDecImgIndex} />
            <ButtonImage type="next" onHandleImgIndex={handleIncImgIndex} />
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <ProductInformation type="men" />
      </div>
    </>
  );
}

export default MenShoes;
