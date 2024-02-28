function ProductImgItem({ index, onHandleImgIndex, activeItem }) {
  return (
    <button onClick={() => onHandleImgIndex(index)}>
      <li className="hover:cursor-pointer">
        <div
          className={`rounded-xl ${activeItem === index && "border-[3px] border-orange-500"}`}
        >
          <img
            src={`../../images/image-product-${index}-thumbnail.jpg`}
            alt=""
            className={`rounded-lg ${activeItem === index && " opacity-30"}`}
          />
        </div>
      </li>
    </button>
  );
}

export default ProductImgItem;
