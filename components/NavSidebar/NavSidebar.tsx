import RedeemIcon from '@mui/icons-material/Redeem';
import List from '@mui/material/List';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {FC} from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {useRouter} from 'next/router';

interface NavSidebarProps {
  open: boolean;
  handleClose: () => void;
}

const NavSidebar: FC<NavSidebarProps> = ({open, handleClose}) => {
  const router = useRouter();

  const handleMarketRedirect = () => {
    router.push('/');
  };
  const handleGiveawayRedirect = () => {
    router.push('/giveaway');
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        'width': 260,
        'flexShrink': 0,
        '& .MuiDrawer-paper': {
          'width': 260,
          'backgroundColor': 'primary.light',
        }}}

    >
      <IconButton onClick={handleClose}>
        <ChevronRightIcon />
      </IconButton>
      <Divider />
      <List>
        <ListItem button
          sx={{backgroundColor: router.pathname === '/' ? 'primary.main' : undefined}}
          onClick={handleMarketRedirect}>
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText primary="Market" />
        </ListItem>
        <ListItem button
          sx={{backgroundColor: router.pathname === '/giveaway' ? 'primary.main' : undefined}}
          onClick={handleGiveawayRedirect}>
          <ListItemIcon>
            <RedeemIcon />
          </ListItemIcon>
          <ListItemText primary="Giveaway Roller" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavSidebar;
