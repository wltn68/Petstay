import React from "react";
import Header from '../header/header';
import Footer from '../footer/footer';
import HotelGrid from "./hotelist1";
import HotelGrid2 from "./hotelist2";
import HotelGrid3 from "./hotelist3";
import HotelGrid4 from "./hotelist4";
import HotelGrid5 from "./hotelist5";


const App = () => {
  return (
    <body className="body" style={{  backgroundColor: '#fff', marginTop :'8.5vh', marginBottom: '6.5vh', height:'1000px'}}>
    <div>
      <Header/>
      <HotelGrid />
      <HotelGrid2 />
      <HotelGrid3 />
      <HotelGrid4 />
      <HotelGrid5 />
      <Footer />
      </div>
    </body>
  );
};

export default App;
