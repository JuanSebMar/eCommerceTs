import { AuthProvider } from "./auth/AuthContext";
import { ProductsProvider } from "./products/context/ProductsContext";
import { MarketRouter } from "./common/router/MarketRouter";

export const App = () => {
  return (
    <>
      <ProductsProvider>
        <AuthProvider>
          <MarketRouter />
        </AuthProvider>
      </ProductsProvider>
    </>
  );
};
