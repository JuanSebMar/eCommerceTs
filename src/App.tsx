import { AuthProvider } from "./auth/AuthContext";
import { ProductsProvider } from "./products/context/ProductsContext";
import { MarketRouter } from "./common/router/MarketRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsProvider>
        <AuthProvider>
          <MarketRouter />
        </AuthProvider>
      </ProductsProvider>
    </QueryClientProvider>
  );
};
