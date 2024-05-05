import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/homepage';
import Login from './pages/Login/login';

import { Provider } from "react-redux";
import store from './store/store';


function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
    
  )
}

export default App
