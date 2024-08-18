import axios from "axios";
import { Product } from "../../common/interfaces/interface";

export const getAllCategories = async () => {
  const { data } = await axios.get<Product[]>(
    `https://fakestoreapi.com/products/categories`
  );
  return data;
};
