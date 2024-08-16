import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";

const SearchBar = ({ items }) => {
  const { products } = useProducts();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(items);
  const filterValue = (event) => {
    const value = event.target;
    setQuery(value);

    const toLowerCase = value.toLowerCase();
    console.log(toLowerCase);
    const filterProduct = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(toLowerCase)
    );
    console.log(filterProduct);
    setResult(filterProduct);
    console.log(result);
    return result;
  };

  return (
    <TextField
      value={query}
      onChange={() => filterValue("")}
      margin={"none"}
      variant="outlined"
      placeholder="Buscar . . ."
      sx={{
        backgroundColor: "white",
        borderRadius: "7px",
        width: "400px",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{ color: "black" }}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchBar;
