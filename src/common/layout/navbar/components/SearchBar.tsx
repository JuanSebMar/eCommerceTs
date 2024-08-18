import { useProducts } from "../../../../products/context/ProductsContext";

const SearchBar = () => {
  const { search, setSearch } = useProducts();

  const onInputChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  return (
    <input
      type="search"
      placeholder="search"
      className="form-control"
      name="searchText"
      autoComplete="off"
      value={search}
      onChange={onInputChange}
    />
  );
};

export default SearchBar;
