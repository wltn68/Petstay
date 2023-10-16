import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar,
        Toolbar,
        IconButton,
        Grid,
        Fab } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapIcon from '@mui/icons-material/Map';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -10,
  left: 0,
  right: 0,
  margin: '0 auto',
  background: '#70ad47'
});

const StyledAppBar = styled(AppBar)`
    &&{
        background-color: #fff;
        border-top: 1px solid #70ad47;
    }
    `

 const StyledIconButton = styled(IconButton)`
    &&{
        color: #70ad47;
        width: 100%;
    }
    `     
const StyledGrid = styled(Grid)`
    &&{
        justify-content:space-around;
    }s
    `         

export default function Footer() {
  return (
    <React.Fragment>
        <StyledAppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        <StyledGrid container spacing={2}>
        <Grid item xs={2.4}>
        <StyledIconButton>
            <MapIcon fontSize= 'large'/>
        </StyledIconButton>
        </Grid>
        <Grid item xs={2.4}>
        <StyledIconButton>
            <LocationOnIcon fontSize= 'large'/>
        </StyledIconButton>
        </Grid>
        <Grid item xs={2.4}>
        <StyledFab>
            <img alt="Foot" src="images/icons/Foot.PNG" width='80%'/>
          </StyledFab>
        </Grid>
        <Grid item xs={2.4}>
        <StyledIconButton>
            <FavoriteIcon fontSize= 'large'/>
        </StyledIconButton>
        </Grid>
        <Grid item xs={2.4}>
        <StyledIconButton>
            <PersonIcon fontSize= 'large'/>
        </StyledIconButton>
        </Grid>
        </StyledGrid>
        </Toolbar>
      </StyledAppBar>
    </React.Fragment>
  );
}