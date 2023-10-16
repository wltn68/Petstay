import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from './components/login/Login.js';
import Menu from './components/menu/menu';
import SignUp from './components/login/SignUp.js';
import Hotellist from './components/hotellist/hotellist';
import Hoteldetail1 from './components/hoteldetail/hoteldetail1';
import Maps from './components/maps/maps';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotellist" element={<Hotellist/> } />
        <Route path="/hoteldetail1" element={<Hoteldetail1/>} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
