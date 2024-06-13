import { Clients } from "../components/home/Clients";
import ProductBestSellers from "../components/product/ProductBestSeller";
import { ProductDescription } from "../components/product/ProductDescription";
import { ProductDetail } from "../components/product/ProductDetail";

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
