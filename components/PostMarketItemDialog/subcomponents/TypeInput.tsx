import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ChangeEvent, FC } from 'react';

import { itemTypes } from '../../../util/itemTypeLists';
import { ItemType } from '../../../util/types';

interface TypeInputProps {
  handleSetType: (event: ChangeEvent<HTMLInputElement>) => void;
  value: ItemType;
}

const TypeInput: FC<TypeInputProps> = ({ handleSetType, value }) => {
  return (
    <FormControl>
      <FormLabel component="legend">Item Type</FormLabel>
      <RadioGroup
        row
        value={value || ""}
        defaultValue={""}
        onChange={handleSetType}
      >
        {itemTypes.map((type) => (
          <FormControlLabel
            key={type}
            value={type}
            control={<Radio />}
            label={type || ""}
            sx={{ width: "11em" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default TypeInput;
