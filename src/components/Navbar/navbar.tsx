import React, { useState } from 'react'
import { Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { useSelector,useDispatch } from 'react-redux';
import {RootState} from '../../store/rootReducer';
import { login } from '../../slices/authSlice';


interface NavbarProps{
    activeTab?:boolean
}

const {Search } = Input
const Navbar: React.FC<NavbarProps> = () => {

    const [searchStrnig,setSearchString] = useState<string>('');
    const dispatch = useDispatch();
    const isloggedin = useSelector((state:any)=>state.auth.isLoggedIn)
    console.log( isloggedin);
    const handleLogin = () => {
        dispatch(login()); // Dispatch logout action
      };
    

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <div>
           <Search placeholder="input search text" allowClear onChange={e=>setSearchString(e.target.value)} onSearch={onSearch} style={{ width: 800 }} />
           <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Navbar;