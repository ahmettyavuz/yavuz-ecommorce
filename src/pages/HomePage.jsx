import { Clients } from "../components/home/Clients";
import { Content } from "../components/home/Content";
import { FeaturedPosts } from "../components/home/FeaturedPosts";
import { Hero } from "../components/home/Hero";
import { ProductsHome } from "../components/product/ProductsHome";
import { Services } from "../components/home/Services";
import { ShopCards } from "../components/home/ShopCards";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <ShopCards />
      <ProductsHome />
      <Content />
      <Services />
      <FeaturedPosts />
    </>
  );
};
export default HomePage;
