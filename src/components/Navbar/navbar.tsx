import React, { useState } from 'react'
import { Col, Input, Row, AutoComplete } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { ReadOutlined } from '@ant-design/icons';

import { useSelector,useDispatch } from 'react-redux';
// import {RootState} from '../../store/rootReducer';
import { login, logout } from '../../slices/authSlice';


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
        isloggedin?
        dispatch(logout()):dispatch(login()) // Dispatch login action
      };
      const options = [
        { value: 'Burns Bay Road' },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
      ];

      const onSelect = (value: string) => {
        console.log('onSelect', value);
      };
    

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <Row className='navbar'>
            <Col span={8}>
            <div className='logo'><ReadOutlined/></div>
            </Col>
            <Col span={8}>

            <div className='search-bar'>
            <AutoComplete
            popupMatchSelectWidth={252}
            style={{ width: 300 }}
            options={options}
            onSelect={onSelect}
            defaultOpen={false}
            // onSearch={handleSearch}
            filterOption={(inputValue, option) =>
                option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              notFoundContent={
                <div>no contnt</div>
              }
            size="large"
            >
                <Search placeholder="input search text" allowClear onChange={e=>setSearchString(e.target.value)} onSearch={onSearch} style={{ width: 'auto' }} />
            </AutoComplete>
            </div>
            </Col>
            <Col span={8}>

            <div className='login-btn'>
                {/* <button onClick={handleLogin}>{isloggedin ? 'Logout' : 'Login'}</button> */}
                {isloggedin ? 'Logout' : 'Login'}
            </div>
            </Col>

        </Row>
        // <div className='navbar'>
        // </div>
    )
}

export default Navbar;