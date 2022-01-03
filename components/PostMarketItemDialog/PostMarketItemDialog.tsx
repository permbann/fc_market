import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {ChangeEvent, FC, useState} from 'react';

import {armor, armorWeights, jewellery, jewelleryWeights, weapons, weaponWeights} from '../../util/itemTypeLists';
import {Category, ItemType, MarketItem} from '../../util/types';
import CategoryInput from './subcomponents/CategoryInput';
import DeletePasswordInput from './subcomponents/DeletePasswordInput';
import LinkInput from './subcomponents/LinkInput';
import NameInput from './subcomponents/NameInput';
import PriceInput from './subcomponents/PriceInput';
import SellerNameInput from './subcomponents/SellerNameInput';
import TypeInput from './subcomponents/TypeInput';

interface PostMarketItemDialogProps {
  open: boolean;
  handleClose: () => void;
  handlePost: (item: MarketItem) => void;
}

const PostMarketItemDialog: FC<PostMarketItemDialogProps> = ({
  open,
  handleClose,
  handlePost,
}) => {
  const [newItem, setNewItem] = useState<MarketItem>({
    name: '',
    type: undefined,
    category: undefined,
    link: '',
    price: -1,
    seller: '',
    password: '',
  });

  const newItemDataAvailable = () => {
    return !(
      newItem.name.length > 0 &&
      newItem.type !== undefined &&
      newItem.category !== undefined &&
      newItem.link.length > 0 &&
      newItem.price >= 0 &&
      newItem.seller.length > 0
    );
  };

  const handleSetItemName = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.name = event.target.value;
    setNewItem(item);
  };

  const handleSetItemType = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.type = event.target.value as ItemType;
    if (armor.includes(item.type) && !armorWeights.includes(newItem.category)) {
      item.category = 'MEDIUM';
    }
    if (
      jewellery.includes(item.type) &&
      !jewelleryWeights.includes(newItem.category)
    ) {
      item.category = 'JEWELLERY';
    }
    if (
      weapons.includes(item.type) &&
      !weaponWeights.includes(newItem.category)
    ) {
      item.category = 'WEAPON';
    }
    setNewItem(item);
  };

  const handleSetItemCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.category = event.target.value as Category;
    setNewItem(item);
  };

  const handleSetItemLink = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.link = event.target.value;
    setNewItem(item);
  };

  const handleSetItemPrice = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.price = Math.abs(parseInt(event.target.value));
    setNewItem(item);
  };

  const handleSetItemSeller = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.seller = event.target.value;
    setNewItem(item);
  };

  const handleSetItemPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const item = {...newItem};
    item.password = event.target.value;
    setNewItem(item);
  };

  const handlePostAndReset = () => {
    handlePost(newItem);
    setNewItem({
      name: '',
      type: undefined,
      category: undefined,
      link: '',
      price: 0,
      seller: '',
      password: '',
    });
  };

  return (
    <Dialog open={open} maxWidth="lg">
      <Box sx={{backgroundColor: 'primary.light', width: '800px'}}>
        <DialogTitle sx={{p: 1}}>
          <Typography fontSize={24} textAlign="center" color="secondary.dark">
            Add new Item to the Clan Market
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{pt: 2}}>
            <Grid item xs={12}>
              <NameInput
                value={newItem.name}
                handleSetName={handleSetItemName}
              />
            </Grid>
            <Grid item xs={12}>
              <TypeInput
                value={newItem.type}
                handleSetType={handleSetItemType}
              />
            </Grid>
            <Grid item xs={12}>
              <CategoryInput
                value={newItem.category}
                selectedType={newItem.type}
                handleSetCategory={handleSetItemCategory}
              />
            </Grid>
            <Grid item xs={12}>
              <LinkInput
                value={newItem.link}
                handleSetLink={handleSetItemLink}
              />
            </Grid>
            <Grid item xs={12}>
              <PriceInput
                value={newItem.price}
                handleSetPrice={handleSetItemPrice}
              />
            </Grid>
            <Grid item xs={12}>
              <SellerNameInput
                value={newItem.seller}
                handleSetSeller={handleSetItemSeller}
              />
            </Grid>
            <Grid item xs={12}>
              <DeletePasswordInput
                value={newItem.password}
                handleSetPassword={handleSetItemPassword}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              onClick={handlePostAndReset}
              sx={{backgroundColor: 'primary.dark'}}
              disabled={newItemDataAvailable()}
            >
              <Typography variant="h6" fontSize={18}>
                Confirm and Post
              </Typography>
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default PostMarketItemDialog;
