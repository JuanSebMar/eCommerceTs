import { Product } from "../../common/interfaces/interface";
import axios from "axios";

export const getOneProduct = async (id: string) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
  } catch (error) {
    console.error("HayError", error);
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get<Product[]>(
      `https://fakestoreapi.com/products`
    );
    return data;
  } catch (error) {
    console.error("HayError", error);
  }
};
