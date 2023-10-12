import {Routes, Route, Router, BrowserRouter} from 'react-router-dom'
import Login from './pages/Cart'
import Navbar from './conponents/Navbar/Navbar'
import './index.css'
import Home from './pages/Home' 
import Cart from './pages/Cart'
export interface IApplicationProps{}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
      <BrowserRouter>   
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/> 
            {/* <Route path="/user" element={<P/>}/>  */}
          </Routes>
      </BrowserRouter>
    )
}

export default App
