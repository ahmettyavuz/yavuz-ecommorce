import md1 from "../assets/col-md-2col-md-1.png";
import md2 from "../assets/col-md-2col-md-2.png";
import md3 from "../assets/col-md-2col-md-3.png";
import md4 from "../assets/col-md-2col-md-4.png";
import md5 from "../assets/col-md-2col-md-5.png";
import md6 from "../assets/col-md-2col-md-6.png";

export const Clients = () => {
  return (
    <>
      <section className="flex justify-center items-center max-lg:flex-wrap  py-8 gap-3">
        <img src={md1} alt="md1.png" />
        <img src={md2} alt="md2.png" />
        <img src={md3} alt="md3.png" />
        <img src={md4} alt="md4.png" />
        <img src={md5} alt="md5.png" />
        <img src={md6} alt="md6.png" />
      </section>
    </>
  );
};
