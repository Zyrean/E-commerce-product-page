import ButtonImage from "../ui/ButtonImage";
import ProductInformation from "../features/product/ProductInformation";
import { useState } from "react";
import ProductImgGallery from "../features/product/ProductImgGallery";

function WomenShoes() {
  const [imgIndex, setImgIndex] = useState(1);
  const [activeItem, setActiveItem] = useState(1);

  function handleImg(key) {
    setActiveItem(key);
  }

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
      <div className="lg:my-20 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-16">
        <div className="relative">
          <img
            src={`../../public/images/image-product-${imgIndex}.jpg`}
            alt=""
            className="lg:hidden"
          />
          <img
            src={`../../public/images/image-product-${activeItem}.jpg`}
            alt=""
            className="hidden lg:block lg:rounded-xl"
          />

          <div className="absolute bottom-1/2 flex w-full justify-between px-4">
            <div className="flex w-full justify-between lg:hidden">
              <ButtonImage
                type="previous"
                onHandleImgIndex={handleDecImgIndex}
              />
              <ButtonImage type="next" onHandleImgIndex={handleIncImgIndex} />
            </div>
          </div>

          <div className="mt-8 hidden lg:block">
            <ProductImgGallery
              onHandleImgIndex={handleImg}
              activeItem={activeItem}
            />
          </div>
        </div>

        <div className="px-6 py-6">
          <ProductInformation type="women" />
        </div>
      </div>
    </>
  );
}

export default WomenShoes;
