import { useEffect, useState } from "react";
import { Product } from "../interfaces/interface";
import { getAllProducts } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProduct = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };
  useEffect(() => {
    const get = async () => {
      await getProduct();
    };
    get();
  }, []);
  return { products, getProduct };
};
