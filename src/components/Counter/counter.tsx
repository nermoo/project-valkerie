import React,{ useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { login, logout } from '../../slices/authSlice';


import styles from './counter.module.less'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const dispatch = useDispatch();
  const isloggedin = useSelector((state:any)=>state.auth.isLoggedIn)

  const handleLogin = () => {
    isloggedin?
    dispatch(logout()):dispatch(login()) // Dispatch login action
  };

  return (
    <div className={styles.counterCrd}>
      <button onClick={handleLogin}>{isloggedin ? 'Logout' : 'Login'}</button>
  </div>
  )
}

export default Counter;