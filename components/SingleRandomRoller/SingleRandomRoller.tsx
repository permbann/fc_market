import {Paper} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import {ChangeEvent, FC, useState} from 'react';

import {getRandomInt} from './../../util/randomInt';

const SingleRandomRoller: FC = () => {
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
    <Paper
      sx={{
        backgroundColor: 'primary.light',
        p: 2,
        m: 4,
        minHeight: '80vh',
      }}
      elevation={4}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h1">Giveaway Roller 1</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <TextField
            fullWidth
            label="Max Roll"
            value={maxRoll === undefined ? '' : maxRoll}
            onChange={handleSetMaxRoll}
            type="number"
            placeholder={'Max number.'}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            sx={{backgroundColor: 'secondary.light', pt: 1.5}}
            onClick={handleSetRoll}
            disabled={!maxRoll}
          >
            <Typography variant="h3" fontSize={18}>
              Let it Roll
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Box sx={{backgroundColor: 'primary.dark', m: 2, p: 2}}>
            <Typography variant="h2" fontSize={58}>
              {roll ?
                `Rolled: ${roll}` :
                'Set the maximum roll and hit the Button.'}
            </Typography>
            {lastRoll && (
              <Typography variant="h2" fontSize={48}>
                Last Roll: {lastRoll}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleRandomRoller;
