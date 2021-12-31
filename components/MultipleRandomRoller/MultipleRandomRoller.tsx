import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ChangeEvent, FC, useEffect, useState } from "react";

import { getRandomSet } from "./../../util/randomInt";

interface SingleRandomRollerProps {}

const MultipleRandomRoller: FC<SingleRandomRollerProps> = (props) => {
  const [maxRoll, setMaxRoll] = useState<number | undefined>(undefined);
  const [resultCount, setResultCount] = useState<number | undefined>(undefined);
  const [rolls, setRolls] = useState<number[] | undefined>(undefined);

  const handleSetRoll = () => {
    if (!maxRoll || !resultCount || resultCount > maxRoll) {
      return;
    }

    setRolls(getRandomSet(maxRoll, resultCount));
  };

  const handleSetMaxRoll = (event: ChangeEvent<HTMLInputElement>) => {
    setMaxRoll(Math.abs(parseInt(event.target.value)));
  };

  const handleSetResultCount = (event: ChangeEvent<HTMLInputElement>) => {
    setResultCount(Math.abs(parseInt(event.target.value)));
  };

  return (
    <Paper
      sx={{
        backgroundColor: "primary.light",
        p: 2,
        m: 4,
        minHeight: "80vh",
      }}
      elevation={4}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h1">Giveaway Roller 2</Typography>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <TextField
            fullWidth
            label="Max Roll"
            value={maxRoll === undefined ? "" : maxRoll}
            onChange={handleSetMaxRoll}
            type="number"
            placeholder={"Max number."}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={4} textAlign="center">
          <TextField
            fullWidth
            label="Result count"
            value={resultCount === undefined ? "" : resultCount}
            onChange={handleSetResultCount}
            type="number"
            placeholder={"Number of results."}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            variant="contained"
            sx={{ backgroundColor: "secondary.light", pt: 1.5 }}
            onClick={handleSetRoll}
            disabled={!maxRoll || !resultCount || resultCount > maxRoll}
          >
            <Typography variant="h3" fontSize={18}>
              {maxRoll && resultCount && resultCount > maxRoll
                ? "Result count must be lower than max roll."
                : "Let it Roll"}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={8} textAlign="center">
          <Box sx={{ backgroundColor: "primary.dark", m: 2, p: 2 }}>
            {rolls ? (
              <TableContainer
                component={Paper}
                sx={{ backgroundColor: "primary.main" }}
              >
                <Table>
                  <TableHead>
                    <TableCell>Position</TableCell>
                    <TableCell>Roll</TableCell>
                  </TableHead>
                  <TableBody>
                    {rolls.map((roll, index) => {
                      const style =
                        index % 2 === 0
                          ? { backgroundColor: "secondray.dark" }
                          : { backgroundColor: "secondray.light" };
                      return (
                        <TableRow key={index}>
                          <TableCell>{index + 1}.</TableCell>
                          <TableCell>{roll}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography variant="h2" fontSize={58}>
                Set the maximum roll + the desired amout of results and hit the
                Button.
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MultipleRandomRoller;
