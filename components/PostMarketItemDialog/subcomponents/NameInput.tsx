import TextField from '@mui/material/TextField';
import {ChangeEvent, FC} from 'react';

interface NameInputProps {
  handleSetName: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const NameInput: FC<NameInputProps> = ({handleSetName, value}) => {
  return (
    <TextField
      fullWidth
      label="Name"
      value={value}
      placeholder={'Custom name of item.'}
      onChange={handleSetName}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default NameInput;
