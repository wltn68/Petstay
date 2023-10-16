import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Header from '../header/header';
import Footer from '../footer/footer';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

export default function Hoteldetail1() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const handleChangeIndex = (index) => {
        setValue(index);
    };
  
  return (
    <div style={{ backgroundColor: '#fff', padding:'50px', marginTop: '50px' }}>
    <Header />
    <Img alt="complex" src="/images/hotel/hotel1.jpg" width='80%' height='70%'/>
        <Grid item xs={8} sm container sx={{ width: '80%', height: '20vh', margin:'50px 150px 50px 150px'}} >
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: '30px', marginTop: '-15px'}}>
                운남동 놀개나개
              </Typography>
              <Typography variant="body2" color="text.secondary">
              인천 중구 운중로14번길 28
              </Typography>
            </Grid>
            <Box sx={{ width: '100%',bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                style={{ marginTop:'30px' }}
            >                
                <Tab sx={{ padding: '0 10vh 0 10vh' }} label="객실" {...a11yProps(0)}/>
                <Tab sx={{ padding: '0 10vh 0 10vh' }} label="위치" {...a11yProps(1)}/>
                <Tab sx={{ padding: '0 10vh 0 10vh' }} label="안내" {...a11yProps(2)}/>
                <Tab sx={{ padding: '0 10vh 0 10vh' }} label="서비스" {...a11yProps(3)}/>
                <Tab sx={{ padding: '0 10vh 0 10vh' }} label="후기" {...a11yProps(4)}/>
        </Tabs>
            <TabPanel style={{ marginBottom: "70px" }} value={value} index={0} dir={theme.direction}>
            Item One
            </TabPanel>
            <TabPanel style={{ marginBottom: "70px" }} value={value} index={1} dir={theme.direction}>
            Item Two
            </TabPanel>
            <TabPanel style={{ marginBottom: "70px" }} value={value} index={2} dir={theme.direction}>
            Item Three
            </TabPanel>
            <TabPanel style={{ marginBottom: "70px" }} value={value} index={3} dir={theme.direction}>
            Item Four
            </TabPanel>
            <TabPanel style={{ marginBottom: "70px" }} value={value} index={4} dir={theme.direction}>
            Item Five
            </TabPanel>
        </Box>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <Footer />
    </div>
  );
}