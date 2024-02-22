function ButtonImage({ type, onHandleImgIndex }) {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white"
      onClick={onHandleImgIndex}
    >
      <div className="flex h-3 w-3 justify-center">
        <img src={`../../images/icon-${type}.svg`} alt="" />
      </div>
    </button>
  );
}

export default ButtonImage;
