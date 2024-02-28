import ButtonImage from "../ui/ButtonImage";
import { useState } from "react";
import ButtonDefault from "../ui/ButtonDefault";
import { useNavigate } from "react-router-dom";

function Collections() {
  const [imgIndex, setImgIndex] = useState(1);

  const navigate = useNavigate();

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
            src={`../../public/images/image-company-${imgIndex}.jpg`}
            alt=""
            className="lg:h-96"
          />

          <div className="absolute bottom-1/2 flex w-full justify-between px-4">
            <div className="flex w-full justify-between">
              <ButtonImage
                type="previous"
                onHandleImgIndex={handleDecImgIndex}
              />

              <ButtonImage type="next" onHandleImgIndex={handleIncImgIndex} />
            </div>
          </div>
        </div>

        <div className="space-y-4 divide-y-2 px-6 py-6 text-center lg:max-w-xl lg:space-y-8">
          <p className="text-xl font-bold uppercase tracking-wider text-orange-500 lg:text-4xl">
            Sneaker Company
          </p>

          <p className="pb-2 pt-4 font-medium lg:pt-8 lg:leading-8">
            Sneakers is a company based in the western USA. Started as a little
            family company, it did grow quit a lot over the past few years.
            Sneakers is a company based in the western USA. Started as a little
            family company, it did grow quit a lot over the past few years.
            Sneakers is a company based in the western USA. Started as a little
            family company, it did grow quit a lot over the past few years.
            Sneakers is a company based in the western USA. Started as a little
            family company, it did grow quit a lot over the past few years.
          </p>

          <div className="flex flex-col gap-2 pt-6 lg:pt-8">
            <ButtonDefault
              classList={"hover:bg-green-400 hover:-translate-y-1"}
              type="men"
              to="menShoes"
              onclick={() => navigate("/menShoes")}
            >
              Brows Men
            </ButtonDefault>

            <ButtonDefault
              classList={"hover:bg-red-400 hover:-translate-y-1"}
              type="women"
              to="womenShoes"
              onclick={() => navigate("/womenShoes")}
            >
              Brows Women
            </ButtonDefault>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
