import React, { useState } from 'react';
import "./Login.css"

const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const SignUp = () => {
    document.location.href = '/signup'
 }

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      // eslint-disable-next-line no-restricted-globals
      location.href ="/menu"
    } else {
      alert('로그인 실패. 사용자 이름 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <body className='body'>
    <div className="container">
    <img alt="Login" src="images/Login.png" width='300vh' style={{ backgroundColor:'#fff', margin: '11%', display: 'block' }}/>
      <div className="form-group" style={{ backgroundColor: '#fff' }}>
        <input
          className="input"
          type="text"
          id="username"
          name="username"
          placeholder="아이디"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ backgroundColor: '#fff' }}>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
    <button className="btn" onClick={handleLogin}>로그인</button>
    <button className="btn" onClick={SignUp}>회원가입</button>
  </div>
  </body>
  );
};

export default Login;
