import { Clients } from "../components/Clients";
import { Content } from "../components/Content";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { ShopCards } from "../components/ShopCards";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Clients />
      <ShopCards />
      <Content />
      <Services />
    </>
  );
};
