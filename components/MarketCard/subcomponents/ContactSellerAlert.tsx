import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import { FC, useState } from "react";
import { MarketItem } from "../../../util/types";

interface ContactSellerAlertProps {
  item: MarketItem;
  handleClose: () => void;
}

const ContactSellerAlert: FC<ContactSellerAlertProps> = ({
  item,
  handleClose,
}) => {
  return (
    <Alert
      severity="success"
      variant="filled"
      action={
        <IconButton aria-label="close" size="small" onClick={handleClose}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      sx={{ mb: 2 }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <Box sx={{ backgroundColor: "secondary.main", p: 1 }}>
            <Typography variant="caption">
              @{item.seller} I am interested in buying your item ({item.name}{" "}
              listed for {item.price} coins) from the clan market.
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            1. Copy the message above to your clipboard.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            2. Proceede to the Discord channel to post the message in the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/full-control"
            >
              Clan Market Channel
            </a>
            .
          </Typography>
        </Grid>
      </Grid>
    </Alert>
  );
};

export default ContactSellerAlert;
