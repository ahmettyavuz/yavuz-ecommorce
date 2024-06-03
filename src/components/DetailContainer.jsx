import detail1 from "../assets/detail-1.jpg";
import detail2 from "../assets/detail-2.jpg";
import detail3 from "../assets/detail-3.jpg";

export const DetailContainer = () => {
  return (
    <>
      <section className="flex  justify-center bg-bgGray py-16">
        <div className="basis-[85%]">
          <div className="py-5 px-5">
            <a className="font-bold text-sm hover:underline" href="/">
              Home
            </a>
            <i className="fa-solid fa-chevron-right m-2 text-muted"></i>
            <a
              className="font-bold text-sm text-muted hover:underline"
              href="/shop"
            >
              Shop
            </a>
          </div>
          <div className="flex gap-6">
            <div className="basis-[45%] flex flex-col gap-4">
              <div className="relative flex items-center ">
                <img
                  className="w-full h-full "
                  src={detail3}
                  alt="detail.jpg"
                />
                <button
                  name="next"
                  className="bg-transparent text-white text-5xl active:text-black absolute right-[8%] hover:opacity-75"
                >
                  {">"}
                </button>
                <button
                  name="prev"
                  className="bg-transparent text-white text-5xl active:text-black absolute left-[8%] hover:opacity-75"
                >
                  {"<"}
                </button>
              </div>
              <div className="flex gap-4">
                <img src={detail1} alt="detail.jpg" />
                <img src={detail2} alt="detail.jpg" />
              </div>
            </div>
            <div className="flex flex-col justify-between basis-[50%] max-h-[80%] px-5 pb-24">
              <h4 className="text-xl">Floating Phone</h4>
              <div className="flex gap-1">
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <p className="text-sm font-bold text-secondTextColor">
                  10 Reviews
                </p>
              </div>
              <p className="text-2xl font-bold">$1,139.33</p>
              <div className="flex">
                <p className="text-sm font-bold text-secondTextColor">
                  Availability :
                </p>
                <p className="text-sm font-bold text-primary">In Stock </p>
              </div>
              <p className="text-sm text-secondTextColor">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr />
              <div className="flex gap-3">
                <div className="bg-primary w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-secondary w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-alert w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-black w-[26px] h-[26px] rounded-full"></div>
              </div>
              <div className="flex gap-4">
                <button className="text-sm font-bold bg-primary text-white rounded-md px-6">
                  Select Options
                </button>
                <div className="flex justify-center gap-4 text-xl max-xl:text-sm max-lg:text-xs max-sm:text-2xl">
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
