import React, { useEffect, useState } from 'react'
import { Col, Input, Row, AutoComplete, Space, Avatar } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { ReadOutlined, UserOutlined } from '@ant-design/icons';

import { useSelector,useDispatch } from 'react-redux';
// import {RootState} from '../../store/rootReducer';
import { login, logout } from '../../slices/authSlice';
import { useGetResultsQuery } from '../../queries/navSlice';
import { useNavigate } from 'react-router-dom';

import styles from './navbar.module.less';


interface NavbarProps{
    activeTab?:boolean
}

interface AutoCompleteOption {
  value: string;
  title: string;
  year: string;
  type: string;
  poster: string;
  imdbId: string;
}


const {Search } = Input
const Navbar: React.FC<NavbarProps> = () => {

  const transformApiResponse = (data:{ Search: any[]; }): AutoCompleteOption[] => {
    return data?.Search?.map(item => ({
      value: item.Title,  // `value` is required by AutoComplete
      title: item.Title,  // Add other properties if needed
      year: item.Year,
      type: item.Type,
      poster: item.Poster,
      imdbId:item.imdbID
    }));
  };
    const [searchStrnig,setSearchString] = useState<string>('');
    const dispatch = useDispatch();
    const isloggedin = useSelector((state:any)=>state.auth.isLoggedIn);
    const navigate = useNavigate();
    const { data, error, isLoading } = useGetResultsQuery(searchStrnig, {
      skip: !searchStrnig, 
    })
    console.log(data?.Search,isLoading,error);
    const options:AutoCompleteOption[] = data ? transformApiResponse(data) : [];
    

    console.log( isloggedin);
    const handleLogin = () => {
        isloggedin?
        dispatch(logout()):dispatch(login()) // Dispatch login action
      };

    const onSelect = (value: string,option: AutoCompleteOption) => {
      console.log('onSelect', value, option);
      navigate(`/${option.imdbId}`)
    };

    const handleClear=()=>{
      setSearchString(''); // this needs to be changed not working
    }
    console.log(searchStrnig);

    useEffect(()=>{

    },[searchStrnig])
      
    

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
    return (
        <Row className='navbar my-4 bg-transparent'>
            <Col span={8}>
            <div className='logo ml-9'><ReadOutlined/></div>
            </Col>
            <Col span={8}>

            <div >
            <AutoComplete
            className={styles.searchbar}
            popupMatchSelectWidth={252}
            options={options}
            onSelect={onSelect}
            onClear={handleClear}
            defaultOpen={false}
            // onSearch={handleSearch}
            filterOption={(inputValue, option) =>
              (option as AutoCompleteOption).title?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              notFoundContent={
                <div>no contnt</div>
              }
            size="large"
            >
                <Search placeholder="input search text" allowClear onChange={e=>setSearchString(e.target.value)} onSearch={onSearch} />
            </AutoComplete>
            </div>
            </Col>
            <Space size={30} align='center' className='ml-auto mr-9'>
              <div className='navLink'>
                  <button onClick={handleLogin}>Categories</button>
              </div>
              <div className='navLink'>
                  <button onClick={handleLogin}>Recommended</button>
              </div>
              <div className='navLink'>
                  <button onClick={handleLogin}>News</button>
              </div> 
              <div className='login-btn'>
                  {/* <button onClick={handleLogin}>{isloggedin ? 'Logout' : 'Login'}</button> */}
                  <Avatar icon={<UserOutlined />} />
              </div>
            </Space>
        </Row>
    )
}

export default Navbar;