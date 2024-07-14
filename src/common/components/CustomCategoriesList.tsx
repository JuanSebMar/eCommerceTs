import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useCategories } from "../hooks/useCategories";

export const CustomCategoriesList = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const { getAllCategories, categories } = useCategories();
  useEffect(() => {
    const get = async () => {
      await getAllCategories();
    };
    get();
  }, []);

  return (
    <Box sx={{ width: "150px", position: "relative" }}>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        sx={{
          position: "absolute",
          top: -26,
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            backgroundColor: "black",
          }}>
          <Typography
            sx={{
              fontSize: 20,
              color: "white",
            }}>
            Categories
          </Typography>
        </AccordionSummary>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <Link
              key={index}
              to={`/categories/${category}`}
              style={{ textDecoration: "none" }}>
              <AccordionDetails
                sx={{
                  fontFamily: theme.typography.fontFamily,
                  fontSize: 20,
                  textDecoration: "none",
                  backgroundColor: "black",
                  color: "white",
                  display: "flex",
                }}>
                <IconButton>
                  <KeyboardArrowRightIcon sx={{ color: "white" }} />
                </IconButton>
                {category}
              </AccordionDetails>
            </Link>
          ))}
      </Accordion>
    </Box>
  );
};
