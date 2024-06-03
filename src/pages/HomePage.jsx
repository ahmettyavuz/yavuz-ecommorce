import { Clients } from "../components/Clients";
import { Content } from "../components/Content";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { Hero } from "../components/Hero";
import { ProductsHome } from "../components/ProductsHome";
import { Services } from "../components/Services";
import { ShopCards } from "../components/ShopCards";

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
