import TextField from '@mui/material/TextField';
import {ChangeEvent, FC} from 'react';

interface DeletePasswordInputProps {
  handleSetPassword: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const DeletePasswordInput: FC<DeletePasswordInputProps> = ({
  handleSetPassword,
  value,
}) => {
  return (
    <TextField
      fullWidth
      label="Deletion Password"
      placeholder={
        'Enter a password. Item can only be deleted with this password.'
      }
      value={value}
      onChange={handleSetPassword}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DeletePasswordInput;
