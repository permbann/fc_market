import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {ChangeEvent, FC, useState} from 'react';

interface DeleteItemDialogProps {
  open: boolean;
  handleClose: () => void;
  itemPassword: string;
  handleDelete: () => void;
}

const DeleteItemDialog: FC<DeleteItemDialogProps> = ({
  open,
  handleClose,
  itemPassword,
  handleDelete,
}) => {
  const [deletePassword, setDeletePassword] = useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeletePassword(event.target.value);
  };
  return (
    <Dialog open={open} maxWidth="lg">
      <Box sx={{backgroundColor: 'primary.dark', width: '800px'}}>
        <DialogTitle>
          <Typography fontSize={24} textAlign="center" color="secondary.light">
            Remove Item from the Clan Market
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
          <Grid container spacing={2} sx={{pt: 1}}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Deletion Password"
                placeholder={'Enter the items deletion password.'}
                value={deletePassword}
                onChange={handleInputChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {deletePassword !== itemPassword ? (
                <Typography textAlign="center">
                  Enter the deletion password.
                </Typography>
              ) : (
                <Typography textAlign="center">
                  Password correct. Press DELETE to permanently remove item.
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              onClick={handleDelete}
              sx={{backgroundColor: 'secondary.dark'}}
              disabled={
                !(
                  deletePassword === itemPassword ||
                  deletePassword === process.env.MARKET_MASTER_DELETE_KEY
                )
              }
            >
              <Typography variant="h6" fontSize={18}>
                DELETE
              </Typography>
            </Button>
          </Grid>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteItemDialog;
