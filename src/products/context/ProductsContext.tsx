import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../../common/interfaces/interface";
import { getAllProducts } from "../services/productService";

const ProductsContext = createContext<any>({});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const getProduct = async () => {
    const data = await getAllProducts();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    const get = async () => {
      await getProduct();
    };
    get();
  }, []);

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
      value={{ products, getProduct, search, setSearch, filteredProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};
