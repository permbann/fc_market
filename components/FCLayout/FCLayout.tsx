import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import {FC, ReactNode, useEffect, useState} from 'react';

import NavSidebar from '../NavSidebar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#44362D',
    },
    secondary: {
      main: '#8D2812',
    },
    text: {
      primary: '#E9EAE8',
      secondary: '#4D3D1D',
    },
    background: {
      default: '#232220',
    },
  },
  typography: {
    fontFamily: 'Freshman',
  },
});

interface LayoutProps {
  children: ReactNode;
}

const FCLayout: FC<LayoutProps> = ({children}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [size, setSize] = useState<{ width: string; minHeight: string }>({
    width: '100px',
    minHeight: '100px',
  });
  useEffect(() => {
    setSize({
      width: document.body.clientWidth.toString() + 'px',
      minHeight: window.innerHeight.toString() + 'px',
    });
    window.addEventListener('resize', () => {
      setSize({
        width: document.body.clientWidth.toString() + 'px',
        minHeight: window.innerHeight.toString() + 'px',
      });
    });
  }, []);

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          backgroundImage: 'url(\'/images/background.PNG\')',
          ...size,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <AppBar sx={{backgroundColor: 'primary.dark'}}>
              <Toolbar sx={{paddingLeft: 0}}>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item sx={{cursor: 'pointer'}}>
                    <Grid container spacing={3}>
                      <Grid item>
                        <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="end"
                          onClick={handleOpenDrawer}
                          sx={{...(openDrawer && {display: 'none'})}}
                        >
                          <MenuIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://discord.gg/full-control"
                        >
                          <Image
                            src="/images/FullControlBanner.PNG"
                            alt="logo"
                            width="158"
                            height="64"
                          />
                        </a>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography color="textPrimary" variant="h1" fontSize={40}>
                      Clan Market
                    </Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={12} md={1} lg={2}></Grid>
          <Grid item xs={12} md={10} lg={8}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                minHeight: '90vh',
                paddingTop: '10vh',
              }}
            >
              {children}
            </Box>
          </Grid>
          <Grid item xs={12} md={1} lg={2}></Grid>
        </Grid>
      </Box>
      <NavSidebar open={openDrawer} handleClose={handleCloseDrawer} />
    </ThemeProvider>
  );
};

export default FCLayout;
