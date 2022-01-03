import TextField from '@mui/material/TextField';
import {ChangeEvent, FC} from 'react';

interface SellerNameInputProps {
  handleSetSeller: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SellerNameInput: FC<SellerNameInputProps> = ({
  handleSetSeller,
  value,
}) => {
  return (
    <TextField
      fullWidth
      label="Seller"
      placeholder={'Your discord name.'}
      value={value}
      onChange={handleSetSeller}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default SellerNameInput;
