import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ObjectId } from "mongodb";
import { ChangeEvent, FC, useEffect, useState } from "react";

import PostMarketItemDialog from "../../components/PostMarketItemDialog";
import axiosInstance from "../../util/axiosInstance";
import { MarketItem } from "../../util/types";
import MarketCard from "../../components/MarketCard";
import FCLayout from "./../../components/FCLayout";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getRandomInt } from "./../../util/randomInt";
import { Paper } from "@mui/material";
import SingleRandomRoller from "../../components/SingleRandomRoller";
import MultipleRandomRoller from "./../../components/MultipleRandomRoller/MultipleRandomRoller";

interface GiveawayProps {}

const Giveaway: FC<GiveawayProps> = (props) => {
  const [maxRoll, setMaxRoll] = useState<number | undefined>(undefined);
  const [roll, setRoll] = useState<number | undefined>(undefined);
  const [lastRoll, setLastRoll] = useState<number | undefined>(undefined);

  const handleSetRoll = () => {
    if (!maxRoll) {
      return;
    }
    if (roll) {
      setLastRoll(roll);
    }
    setRoll(getRandomInt(1, maxRoll + 1));
  };

  const handleSetMaxRoll = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxRoll(Math.abs(parseInt(event.target.value)));
  };

  return (
    <FCLayout>
      <Grid container>
        <Grid item xs={12}>
          <SingleRandomRoller />
        </Grid>
        <Grid item xs={12}>
          <MultipleRandomRoller />
        </Grid>
      </Grid>
    </FCLayout>
  );
};

export default Giveaway;
