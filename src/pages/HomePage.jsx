import { Clients } from "../components/Clients";
import { Content } from "../components/Content";
import { FeaturedPosts } from "../components/FeaturedPosts";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Services } from "../components/Services";
import { ShopCards } from "../components/ShopCards";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <ShopCards />
      <Products />
      <Content />
      <Services />
      <FeaturedPosts />
    </>
  );
};
