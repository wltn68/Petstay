import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({

  display: 'block',
});

export default function HotelGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: '80px 30px 30px 30px',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
    <ButtonBase href="/hoteldetail1" sx={{ width: '100%', height: '20vh', textAlign: 'center' }}>
            <Img alt="complex" src="/images/hotel/hotel1.jpg" width='300vh' height='185vh' sx={{ marginLeft: '10px' }} />
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: '30px', marginTop: '-15px'}}>
                운남동 놀개나개
              </Typography>
              <Typography variant="body2" color="text.secondary">
              인천 중구 운중로14번길 28
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" sx={{ marginRight: '20px' }}>
              44,000 ~
            </Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    </Paper>
  );
}