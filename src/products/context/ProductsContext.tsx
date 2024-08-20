import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../../common/interfaces/interface";
import { getAllProducts } from "../services/productService";
import { useQuery } from "@tanstack/react-query";

const ProductsContext = createContext<any>({});

export const ProductsProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["products", "categories"], // Clave de caché
    queryFn: getAllProducts,
  });

  useEffect(() => {
    if (search.length > 1) {
      const filterProducts = products.filter((product) =>
        product.title.toLocaleLowerCase().includes(search)
      );
      setFilteredProducts(filterProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [search]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        search,
        setSearch,
        filteredProducts,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};
