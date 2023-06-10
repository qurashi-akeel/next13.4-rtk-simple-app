'use client';

import { login, logout, toggle } from '@/redux/features/authSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');

  const user = useAppSelector((state) => state.authReducer.value);

  const dispatch = useDispatch<AppDispatch>();

  const onclickLogin = () => {
    dispatch(login(username));
  };
  const onclickLogout = () => {
    dispatch(logout());
  };
  const onclickToggle = () => {
    dispatch(toggle());
  };

  return (
    <div className="login">
      <h1>Learn RTK with Next</h1>

      <div>
        <label>Name</label>
        <input onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="btn-wrap">
        {!user.isAuth ? (
          <button onClick={onclickLogin}>Login</button>
        ) : (
          <>
            <button onClick={onclickLogout}>Logout</button>
            <button onClick={onclickToggle}>Toggle Status</button>
          </>
        )}
      </div>
    </div>
  );
};
export default Login;
