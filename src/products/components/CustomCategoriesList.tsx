import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/productService";
import { useState } from "react";

export const CustomCategoriesList = () => {
  const [expanded, setExpanded] = useState(false);

  const { data: products = [] } = useQuery({
    queryKey: ["categories"], // Clave de caché
    queryFn: getAllCategories,
  });

  return (
    <Accordion
      sx={{
        position: "absolute",
        backgroundColor: "black",
      }}
      disableGutters
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      onMouseLeave={() => setExpanded(false)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        sx={{
          backgroundColor: "black",
        }}>
        <Typography sx={{ color: "white", fontSize: "20px" }}>
          Categories
        </Typography>
      </AccordionSummary>
      {products.length > 0 &&
        products.map((category, index) => (
          <Link
            key={index}
            to={`/categories/${category}`}>
            <AccordionDetails
              sx={{
                display: "flex",
                fontSize: 20,
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
              }}>
              <AccordionDetails
                sx={{
                  display: "flex",
                  fontSize: 20,
                  color: "white",
                  backgroundColor: "black",
                }}>
                {category}
              </AccordionDetails>
              <IconButton>
                <KeyboardArrowRightIcon sx={{ color: "white" }} />
              </IconButton>
            </AccordionDetails>
          </Link>
        ))}
    </Accordion>
  );
};
