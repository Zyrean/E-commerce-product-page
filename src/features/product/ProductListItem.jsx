import { NavLink, useNavigate } from "react-router-dom";
import { calcPrice } from "./calcPrice";
import { useState } from "react";

function ProductListItem({ shoe }) {
  const {
    brand,
    colors,
    description,
    name,
    onSale,
    originalPrice,
    saleAmount,
    sizes,
    id,
  } = shoe;

  

  return (
    <li className="h-32 rounded-md bg-stone-50 shadow-sm">
      <NavLink
        to={`/kids/${curIndex}`}
        className="flex w-full items-center gap-2"
        onClick={handleClickInfo}
      >
        <div className="rounded-md bg-green-400">
          <img
            src="../../public/images/image-product-3-thumbnail.jpg"
            alt=""
            className="h-32 rounded-bl-md rounded-tl-md"
          />
        </div>

        <div className="flex flex-1">
          <div className="mx-2 flex-1">
            <p className="text-left font-bold">{brand}</p>
            <p className="text-left text-sm">{name}</p>

            <div className="my-2 flex items-center justify-between">
              <ul className="flex flex-1 flex-row gap-1">
                {colors.map((color, i) => (
                  <li key={i} className="h-4 w-4 rounded-sm bg-orange-500"></li>
                ))}
              </ul>

              <div className="rounded-md bg-orange-300 px-2 text-sm text-orange-800">
                {onSale && <p>{saleAmount}%</p>}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">
                {"€"}
                {onSale ? calcPrice(originalPrice, saleAmount) : originalPrice}
              </p>

              <p className="font-medium text-stone-500 line-through">
                {onSale && "€" + originalPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </li>
  );
}

export default ProductListItem;
