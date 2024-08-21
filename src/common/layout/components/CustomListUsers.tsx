import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import BadgeAvatars from "./UserIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth } from "../../../auth/AuthContext";
import { LogOut } from "../../../auth/components/LogOut";

export const CustomListUsers = () => {
  const { user } = useAuth();
  return (
    <Accordion
      sx={{ backgroundColor: "black" }}
      disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
        sx={{ backgroundColor: "black" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}>
          {user.uid && <BadgeAvatars image={user.photoURL} />}
          <Typography
            sx={{
              fontSize: 20,
              color: "#ffffff",
            }}>
            {user.uid && user.displayName.slice(0, 10)}
          </Typography>
        </Box>
      </AccordionSummary>

      {user && (
        <AccordionDetails
          sx={{
            display: "flex",
            backgroundColor: "black",
            position: "absolute",
            borderRadius: "10px",
            margin: "3px 0px 0px 30px",
          }}>
          <LogOut />
        </AccordionDetails>
      )}
    </Accordion>
  );
};
