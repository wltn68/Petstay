import * as React from 'react';
import { CssBaseline } from '@mui/material';
import Header from '../header/header';
import Footer from '../footer/footer';
import Menu2 from './menu2';


export default function Menu() {
  return (
    <React.Fragment>
      <Header />
        <img alt="banner" src="images/banner.png" width='500vh' style={{ margin: 'auto', display: 'block', marginTop: '5%' }}/>
      <CssBaseline />
      <Menu2 />
    <Footer />
    </React.Fragment>
  );
}