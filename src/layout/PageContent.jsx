import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import TeamPage from "../pages/TeamPage";

export const PageContent = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
        <Route path="/details">
          <ProductDetailPage />
        </Route>
      </Switch>
    </div>
  );
};
