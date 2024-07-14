import { useEffect, useState } from "react";
// import { Product } from "../interfaces/interface";
import { getAllCategories } from "../services/categoriesServices";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };
    fetch();
  }, []);

  return { getAllCategories, categories };
};
