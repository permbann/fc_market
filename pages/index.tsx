import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {ObjectId} from 'mongodb';
import {FC, useEffect, useState} from 'react';

import FCLayout from '../components/FCLayout';
import MarketCard from '../components/MarketCard';
import PostMarketItemDialog from '../components/PostMarketItemDialog';
import axiosInstance from '../util/axiosInstance';
import {MarketItem} from '../util/types';

interface MarketProps {}

const Market: FC<MarketProps> = () => {
  const [marketItems, setMarketItems] = useState<MarketItem[]>([]);
  const [openAddItem, setOpenAddItem] = useState(false);

  const queryMarketItems = () => {
    axiosInstance.get('/market/items').then((res) => {
      setMarketItems(res.data);
    });
  };

  const handleDeleteItem = async (itemId: string) => {
    await axiosInstance.delete(`/market/remove?id=${itemId}`);
    queryMarketItems();
  };

  const handleOpenAddItemDialog = () => {
    setOpenAddItem(true);
  };

  const handleCloseAddItemDialog = () => {
    setOpenAddItem(false);
  };

  const handlePostItem = async (item: MarketItem) => {
    await axiosInstance.post('/market/create', {item: item});
    queryMarketItems();
    setOpenAddItem(false);
  };

  useEffect(() => {
    queryMarketItems();
  }, []);

  return (
    <FCLayout>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            sx={{backgroundColor: 'secondary.light', pt: 1.5}}
            onClick={handleOpenAddItemDialog}
          >
            <Typography variant="h3" fontSize={18}>
              Add Item to Market
            </Typography>
          </Button>
        </Grid>
        {marketItems.map((marketItem) => (
          <Grid item key={(marketItem._id as ObjectId).toString()}>
            <MarketCard item={marketItem} handleDelete={handleDeleteItem} />
          </Grid>
        ))}
      </Grid>
      <PostMarketItemDialog
        open={openAddItem}
        handleClose={handleCloseAddItemDialog}
        handlePost={handlePostItem}
      />
    </FCLayout>
  );
};

export default Market;
