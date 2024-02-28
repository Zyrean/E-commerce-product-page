import { useState } from "react";
import ProductImgItem from "./ProductImgItem";

function ProductImgGallery({ onHandleImgIndex, activeItem }) {
  const test = [1, 2, 3, 4];

  return (
    <ul className="flex gap-6">
      {test.map((img, i) => (
        <ProductImgItem
          index={i + 1}
          key={i}
          onHandleImgIndex={onHandleImgIndex}
          activeItem={activeItem}
        />
      ))}
    </ul>
  );
}

export default ProductImgGallery;
