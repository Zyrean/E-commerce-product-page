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
      <div className="relative">
        <img src={`../../public/images/image-company-${imgIndex}.jpg`} alt="" />
        <div className="absolute bottom-1/2 flex w-full justify-between px-4">
          <div className="flex w-full justify-between">
            <ButtonImage type="previous" onHandleImgIndex={handleDecImgIndex} />
            <ButtonImage type="next" onHandleImgIndex={handleIncImgIndex} />
          </div>
        </div>
      </div>

      <div className="space-y-4 divide-y-2 px-6 py-6 text-center">
        <p className="text-xl font-bold uppercase tracking-wider text-orange-500">
          Sneaker Company
        </p>

        <p className="pb-2 pt-4 font-medium">
          Sneakers is a company based in the western USA. Started as a little
          family company, it did grow quit a lot over the past few years.
          Sneakers is a company based in the western USA. Started as a little
          family company, it did grow quit a lot over the past few years.
          Sneakers is a company based in the western USA. Started as a little
          family company, it did grow quit a lot over the past few years.
          Sneakers is a company based in the western USA. Started as a little
          family company, it did grow quit a lot over the past few years.
        </p>

        <div className="flex flex-col gap-2 pt-6">
          <ButtonDefault
            type="men"
            to="menShoes"
            onclick={() => navigate("/menShoes")}
          >
            Brows Men
          </ButtonDefault>

          <ButtonDefault
            type="women"
            to="womenShoes"
            onclick={() => navigate("/womenShoes")}
          >
            Brows Women
          </ButtonDefault>
        </div>
      </div>
    </>
  );
}

export default Collections;
