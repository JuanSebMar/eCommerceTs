import { useState } from "react";
import { TextField, List, ListItem, ListItemText, Box } from "@mui/material";

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems =
    items &&
    items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Box sx={{ color: "white", borderColor: "white" }}>
      <TextField
        sx={{
          width: "400px",
          height: "50px",
          marginTop: "8px",
          backgroundColor: "white",
          color: "white",
          borderRadius: "5px",
        }}
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleChange}
      />
      <List>
        {filteredItems > 0 &&
          filteredItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default SearchBar;
