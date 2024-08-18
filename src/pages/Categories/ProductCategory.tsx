import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useCart } from "../../products/hooks/useCart";
import { useFavorites } from "../../products/hooks/useFavorites";
import { ProductCard } from "../../products/Card/ProductCard";
import { useProducts } from "../../products/context/ProductsContext";

export const ProductCategory = () => {
  const [filterproduct, setFilterProduct] = useState([]);
  const { products, getProduct } = useProducts();
  const { handleAddToCart } = useCart();
  const { handleFavorites } = useFavorites();
  const params = useParams();

  useEffect(() => {
    const getCategory = async () => {
      await getProduct();
    };
    getCategory();
  }, [params]);

  useEffect(() => {
    const filterProducts =
      products.length > 0 &&
      products.filter((product) => product.category == params.category);
    setFilterProduct(filterProducts);
  }, [products]);

  return (
    <Box
      sx={{
        margin: "80px  ",
        display: "flex ",
        flexDirection: "wrap",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
      }}>
      {filterproduct.length > 0 &&
        filterproduct.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleFavorites={handleFavorites}
          />
        ))}
    </Box>
  );
};
