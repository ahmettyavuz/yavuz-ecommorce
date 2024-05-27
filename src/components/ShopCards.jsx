import left from "../assets/unsplash_Bd7gNnWJBkUshopcardleft.jpg";
import topRight from "../assets/unsplash_MKvjc2kar7Qshopcardtopright.jpg";
import bottomRight from "../assets/unsplash_muOHbrFGEQYshopcardbottomright.jpg";

export const ShopCards = () => {
  return (
    <>
      <section className="py-10 flex justify-center">
        <div className="flex justify-center gap-5 basis-[90%] max-lg:flex-wrap w-[100%]">
          <div className="relative text-white">
            <img className="" src={left} alt="" />
            <div className="bg-customColor bg-opacity-75 absolute bottom-0 py-10 px-20 flex flex-col items-center">
              <h2 className="font-bold text-2xl mb-4 max-w-44">
                Top Product Of the Week
              </h2>
              <button className="text-sm border-solid border-[1px] border-white py-3 px-8 rounded-md">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative text-white">
              <img src={topRight} alt="" />
              <div className="bg-customColor bg-opacity-75 absolute bottom-0 py-10 pl-10 pr-20">
                <h2 className="font-normal text-xl">Top Product Of the Week</h2>
                <button className="text-sm border-solid border-[1px] border-white py-3 px-8 rounded-md mt-3">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
            <div className="relative text-white">
              <img src={bottomRight} alt="" />
              <div className="bg-customColor bg-opacity-75 absolute bottom-0 py-10 pl-10 pr-20">
                <h2 className="font-normal text-xl">Top Product Of the Week</h2>
                <button className="text-sm border-solid border-[1px] border-white py-3 px-8 rounded-md mt-2">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
