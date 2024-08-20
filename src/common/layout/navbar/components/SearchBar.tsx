import { useEffect, useState } from "react";
import { FilterProducts } from "../../../../products/components/FilterProducts";
import { useProducts } from "../../../../products/context/ProductsContext";

const SearchBar = () => {
  const { search, setSearch, filteredProducts } = useProducts();
  const [modalOpen, setModalOpen] = useState(false);

  const onInputChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };
  const handleCloseModal = () => setModalOpen(false);
  const handleOpenModal = () => setModalOpen(true);

  useEffect(() => {
    if (search.length >= 3) handleOpenModal();
  }, [search]);

  return (
    <>
      <input
        style={{ width: "500px" }}
        type="search"
        placeholder="search"
        className="form-control"
        name="searchText"
        autoComplete="off"
        value={search}
        onChange={onInputChange}
      />
      <FilterProducts
        open={modalOpen}
        onClose={handleCloseModal}
        products={filteredProducts}
      />
    </>
  );
};

export default SearchBar;
