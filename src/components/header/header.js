import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar,
        Toolbar,
        Button,
        IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

const StyledAppBar = styled(AppBar)`
    &&{
        background-color: #70ad47;
    }
    `

const Searchbtn = () => {
    document.location.href = '/hotellist'
}

export default function Header() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar style={{ margin: '0 auto' }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button href='./menu'>
        <img alt="Logo" src="images/Logo.png" height='40vh' style={{ marginRight:'20px' }} />
        </Button>
        <section className="search-row">
        <input className="search-input" type="text" placeholder="지역을 입력해주세요" />

        <div className="checks-input">
          <input className="check-in" type="text" placeholder="체크인" />

          <svg className="right-arrow" xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
          <input className="check-out" type="text" placeholder="체크아웃" />
        </div>

        <select className="guests">
          <option>1멍</option>
          <option>2멍</option>
          <option>3멍</option>
          <option>4멍</option>
          <option>4멍 이상</option>
          <option>1냥</option>
          <option>2냥</option>
          <option>3냥</option>
          <option>4냥</option>
          <option>4냥 이상</option>
          <option>1멍 1냥</option>
          <option>1멍 2냥</option>
          <option>1멍 3냥</option>
          <option>2멍 1냥</option>
          <option>2멍 2냥</option>
          <option>3멍 4냥</option>
          <option>4멍 4냥</option>
          <option>무한멍 무한냥</option>
        </select>

        <button className="search-btn" onClick={Searchbtn}>검색</button>
      </section>
        <Button style={{ marginLeft:'20px' }} color="inherit" href='/'>
          Logout
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
}