// import { MarketRouter } from "./common/router/MarketRouter";
import { AuthProvider } from "./auth/AuthContext";
import { MarketRouter } from "./common/router/MarketRouter";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <MarketRouter />
      </AuthProvider>
    </>
  );
};
