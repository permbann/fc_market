import Grid from "@mui/material/Grid";
import { ChangeEvent, FC, useEffect, useState } from "react";

import SingleRandomRoller from "../components/SingleRandomRoller";
import FCLayout from "./../components/FCLayout";
import MultipleRandomRoller from "./../components/MultipleRandomRoller/MultipleRandomRoller";

interface GiveawayProps {}

const Giveaway: FC<GiveawayProps> = (props) => {
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
