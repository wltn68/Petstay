import React, { useState } from 'react';
import "./Login.css"

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignUp = () => {
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (password.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
    } else if (!/[!@#$%^&*.]/.test(password)) {
      alert('비밀번호는 특수문자를 포함해야 합니다.');
    } else {
      // 여기서 사용자 데이터를 로컬 스토리지에 저장하는 코드를 작성합니다.
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      // eslint-disable-next-line no-restricted-globals
      location.href ="/"
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
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div className="form-group" style={{ backgroundColor: '#fff' }}>
      <input
        className="input"
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className="form-group" style={{ backgroundColor: '#fff' }}>
      <input
        className="input"
        type="password"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      </div>
      <button className="btn" onClick={handleSignUp}>가입</button>
    </div>
    </body>
  );
};

export default SignUp;
