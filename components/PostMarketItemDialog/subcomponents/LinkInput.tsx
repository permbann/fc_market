import TextField from "@mui/material/TextField";
import { ChangeEvent, FC } from "react";

interface LinkInputProps {
  handleSetLink: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const LinkInput: FC<LinkInputProps> = ({ handleSetLink, value }) => {
  return (
    <TextField
      fullWidth
      type="url"
      label="Image Link"
      value={value}
      placeholder={"Link to image."}
      onChange={handleSetLink}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default LinkInput;
