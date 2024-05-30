import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";

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
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about-us">
          <AboutPage />
        </Route>
      </Switch>
    </div>
  );
};
