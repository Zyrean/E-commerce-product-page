function ProductPreview() {
  return (
    <div>
      <div className="flex bg-red-400 lg:my-20 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-16">
        <div className="h-14 w-14 bg-red-300">
          <img
            // src={`../../public/images/image-product-${1}.jpg`}
            src={`../../public/images/image-product-1.jpg`}
            alt=""
            className="lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
