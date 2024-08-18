import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/Auth/LoginPage";
import { RegisterPage } from "../../pages/Auth/RegisterPage";
import AppLayOut from "../layout/AppLayOut";
import { CategoriesPage } from "../../pages/Categories/CategoriesPage";
import { FavoritesPage } from "../../pages/Favorites/FavoritesPage";
import { CartPage } from "../../pages/Cart/Cart/CartPage";
import { OneItemPage } from "../../pages/Cart/Cart/OneItemPage";
import { DashBoardpage } from "../../pages/DashBoard/DashBoardpage";
import { UsersPage } from "../../pages/DashBoard/components/users/UsersPage";
import { ProductsPage } from "../../pages/DashBoard/components/products/ProductsPage";
import { MetricsPage } from "../../pages/DashBoard/components/metrics/MetricsPage";
import { lazy } from "react";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const lazyWithDelay = (importFunc, delay) => {
  return lazy(() =>
    Promise.all([importFunc(), sleep(delay)]).then(
      ([moduleExports]) => moduleExports
    )
  );
};
const LazyApp = lazyWithDelay(() => import("../../pages/Home/HomePage"), 500);

export default lazyWithDelay;
export const MarketRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayOut />}>
          <Route
            index
            element={<LazyApp />}
          />

          <Route
            path="login"
            element={<LoginPage />}
          />
          <Route
            path="singin"
            element={<RegisterPage />}
          />

          <Route
            path="categories/:category"
            element={<CategoriesPage />}
          />
          <Route
            path="favorites"
            element={<FavoritesPage />}
          />
          <Route
            path="cart/:id"
            element={<OneItemPage />}
          />
          <Route
            path="cartpage"
            element={<CartPage />}
          />
          <Route
            path="dashboard"
            element={<DashBoardpage />}>
            <Route
              index
              path="metrics"
              element={<MetricsPage />}></Route>
            <Route
              path="users"
              element={<UsersPage />}></Route>
            <Route
              path="products"
              element={<ProductsPage />}></Route>
            <Route
              path="categories"
              element={<CategoriesPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
