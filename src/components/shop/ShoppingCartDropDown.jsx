import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ShoppingCartDropDown() {
  const { categories, loading } = useSelector((store) => store.global);
  const cart = useSelector((store) => store.shoppingCart.cart);

  return (
    <div className="flex text-black flex-col bg-white border-2 border-gray-300 rounded-xl w-[350px] max-sm:w-[300px]">
      <p className="px-5 py-3 font-bold">Sepetim ({cart.length} ürün)</p>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {cart?.map((product, index) => (
          <ShoppingCart key={cart.id} product={product} />
        ))}
      </div>
      <div className="px-5 py-4 flex justify-between gap-2">
        <Link
          to="/shopping-cart"
          className="basis-1/2 hover:bg-orange-500 text-center hover:text-white text-base max-md:text-sm border-[1px] bg-gray-100 border-gray-200 rounded-md py-2"
        >
          Sepete Git
        </Link>
        <Link className="basis-1/2 bg-orange-500 text-center border-[1px] hover:scale-105 max-md:text-sm hover:opacity-85 border-gray-200  text-white rounded-md py-2">
          Siparişi Tamamla
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartDropDown;
