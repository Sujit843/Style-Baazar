import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Nav from './components/Nav'
import { useContext } from 'react'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import {useLocation} from "react-router-dom"
import Product from './pages/Product'
import {Navigate} from "react-router-dom"
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Ai from './components/Ai'
import Wishlist from './pages/Wishlist'

function App() {
const {userData} = useContext(userDataContext)
const location = useLocation();
  return (
    <>
    {userData && <Nav/>}
      <Routes>
        
        <Route path='/login'  
        element={
          userData ? 
          (<Navigate to = {location.state?.from || "/"} />)
          : (<Login />)
        } />

        <Route path='/signup' element={userData ? 
          (<Navigate to = {location.state?.from || "/"} />)
          : (<Registration />)} />

        <Route path='/' element={userData ? <Home /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/about' element={userData ? <About /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/collection' element={userData ? <Collection /> : <Navigate to="/login" state= {{from: location.pathname}} />} />
        
        <Route path='/contact' element={userData ? <Contact /> : <Navigate to="/login" state= {{from: location.pathname}} />} />
        
        <Route path='/product' element={userData ? <Product /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/productdetails/:productId' element={userData ? <ProductDetails /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/cart' element={userData ? <Cart /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/placeOrder' element={userData ? <PlaceOrder /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/order' element={userData ? <Order /> : <Navigate to="/login" state= {{from: location.pathname}} />} />

        <Route path='/wishlist' element={userData ? <Wishlist /> : <Navigate to="/login" state= {{from: location.pathname}} />} />
        
      </Routes>
      <Ai />
    </>
  )
}

export default App
