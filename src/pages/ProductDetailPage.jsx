import { Clients } from "../components/Clients";
import ProductBestSellers from "../components/ProductBestSeller";
import { ProductDescription } from "../components/ProductDescription";
import { ProductDetail } from "../components/ProductDetail";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <ProductDescription />
      <ProductBestSellers />
      <Clients />
    </>
  );
};

export default ProductDetailPage;
