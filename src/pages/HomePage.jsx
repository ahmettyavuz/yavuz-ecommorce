import { Clients } from "../components/Clients";
import { Hero } from "../components/Hero";
import { ShopCards } from "../components/ShopCards";
import { Header } from "../layout/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <ShopCards />
    </>
  );
};
