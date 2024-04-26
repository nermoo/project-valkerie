import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/homepage';
import Login from './pages/Login/login';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
