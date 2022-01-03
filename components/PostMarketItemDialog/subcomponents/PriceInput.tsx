import TextField from '@mui/material/TextField';
import {ChangeEvent, FC} from 'react';

interface PriceInputProps {
  handleSetPrice: (event: ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

const PriceInput: FC<PriceInputProps> = ({handleSetPrice, value}) => {
  return (
    <TextField
      fullWidth
      label="Cost"
      value={value < 0 ? '' : value}
      onChange={handleSetPrice}
      type="number"
      placeholder={'Cost of item.'}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default PriceInput;
