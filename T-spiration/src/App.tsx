import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './conponents/Navbar/Navbar'
import './index.css'
import Home from './pages/Home';
import Profile from './pages/Profile' 
import Shopping from './pages/Shopping'
import Cart from './pages/Cart';  
import React from 'react'; 
import SellerLogin from './pages/sellers/SellerLogin';
import SellerHome from './pages/sellers/SellerHome';
import SellerNavbar from './conponents/Navbar/SellerNavbar';
import Account from './pages/sellers/Account';
import Settings from './pages/sellers/Settings'; 
import Summaries from './pages/sellers/Summaries';

export interface IApplicationProps{}

const App: React.FunctionComponent<IApplicationProps> = (props) => {   
    return ( 
      <BrowserRouter>    
        <Routes>
          <Route path="/user/*" element={<Navbar/>} />
          <Route path="/admin/*" element={<SellerNavbar/>} />
        </Routes>
        <Routes> 
          <Route path="/user" element={<Home/>}/>
          <Route path="/user/shopping" element={<Shopping/>}/> 
          <Route path="/user/profile" element={<Profile/>}/> 
          <Route path="/user/cart" element={<Cart/>}/> 
          <Route path="/login" element={<SellerLogin/>}/> 
          <Route path="/admin/home" element={<SellerHome/>}/> 
          <Route path="/admin/account" element={<Account/>}/> 
          <Route path="/admin/settings" element={<Settings/>}/>   
          <Route path="/admin/summaries" element={<Summaries/>}/> 

        </Routes>    
      </BrowserRouter>
    )
}

export default App
