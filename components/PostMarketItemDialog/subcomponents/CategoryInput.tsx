import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { ChangeEvent, FC } from 'react';

import {
  armor,
  armorWeights,
  itemWeights,
  jewellery,
  jewelleryWeights,
  weapons,
  weaponWeights,
} from '../../../util/itemTypeLists';
import { Category, ItemType } from '../../../util/types';

interface CategoryInputProps {
  handleSetCategory: (event: ChangeEvent<HTMLInputElement>) => void;
  value: Category;
  selectedType: ItemType;
}

const CategoryInput: FC<CategoryInputProps> = ({
  handleSetCategory,
  value,
  selectedType,
}) => {
  const radioDisabled = (itemWeight: Category) => {
    if (armor.includes(selectedType) && !armorWeights.includes(itemWeight)) {
      return true;
    }
    if (
      jewellery.includes(selectedType) &&
      !jewelleryWeights.includes(itemWeight)
    ) {
      return true;
    }
    if (weapons.includes(selectedType) && !weaponWeights.includes(itemWeight)) {
      return true;
    }
    return false;
  };

  return (
    <FormControl>
      <FormLabel component="legend">Item Category</FormLabel>
      <RadioGroup
        row
        value={value === undefined ? "" : value}
        onChange={handleSetCategory}
      >
        {itemWeights.map((itemWeight) => (
          <FormControlLabel
            key={itemWeight}
            value={itemWeight}
            control={<Radio />}
            label={itemWeight || ""}
            disabled={radioDisabled(itemWeight)}
            sx={{ width: "12em" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryInput;
