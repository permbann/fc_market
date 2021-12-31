import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ObjectId } from "mongodb";
import { FC, useState } from "react";

import { MarketItem } from "../../util/types";
import ContactSellerAlert from "./subcomponents/ContactSellerAlert";
import DeleteItemDialog from "./subcomponents/DeleteItemDialog";

interface MarketCardProps {
  item: MarketItem;
  handleDelete: (itemId: string) => void;
}

const MarketCard: FC<MarketCardProps> = ({ item, handleDelete }) => {
  const [deleteIntent, setdeleteIntent] = useState(false);
  const [contactIntent, setcontactIntent] = useState(false);

  const handleCopyToClipboard = () => {
    // navigator.clipboard.writeText(
    //   `@${item.seller} I am interested in buying your item (${item.name} listed for ${item.price}) from the clan market.`
    // );
    setcontactIntent(true);
  };

  const handleTryDelete = () => {
    setdeleteIntent(true);
  };

  const handleCancleDelete = () => {
    setdeleteIntent(false);
  };

  const handleDeleteItem = () => {
    handleDelete((item._id as ObjectId).toString());
    setdeleteIntent(false);
  };

  const handleCloseContact = () => {
    setcontactIntent(false);
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "340px",
          backgroundColor: "primary.light",
          paddingLeft: "20px",
          paddingRight: "20px",
          // border: "5px solid #1F1F1A",
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} textAlign="center">
            <img src={item.link} alt={item.name} width="280px" height="350px" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3" fontSize={18}>
              Name:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3" fontSize={18}>
              {item.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h4" fontSize={12}>
              Item Type:
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h4" fontSize={12}>
              {item.category} | {item.type}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5" fontSize={16}>
              Price:{" "}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" fontSize={16}>
              {item.price}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="space-between">
              <Grid item>
                <Button variant="contained" onClick={handleCopyToClipboard}>
                  <Typography variant="h6" fontSize={14} display="inline">
                    Contact seller
                  </Typography>
                  <Typography
                    variant="h6"
                    fontSize={15}
                    color="secondary.main"
                    sx={{ marginLeft: "1em" }}
                  >
                    {item.seller}
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleTryDelete}>
                  <Typography variant="h6" fontSize={14} display="inline">
                    Delete
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="caption" fontSize={9}>
              Storage ID: {item._id}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Collapse in={contactIntent}>
              <ContactSellerAlert
                item={item}
                handleClose={handleCloseContact}
              />
            </Collapse>
          </Grid>
        </Grid>
      </Paper>
      <DeleteItemDialog
        open={deleteIntent}
        handleClose={handleCancleDelete}
        itemPassword={item.password}
        handleDelete={handleDeleteItem}
      />
    </>
  );
};

export default MarketCard;
