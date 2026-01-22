import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AddForm from "./pages/AddForm"
import List from "./pages/List";
import Order from "./pages/Order";
import Login from "./pages/Login";
import { useContext } from 'react';
import { adminDataContext } from './context/AdminContext';

function App() {
const {adminData} = useContext(adminDataContext);

  return (
    <>
    {!adminData ? <Login/> : <>

    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/addform' element={<AddForm/> }/>
      <Route path='/list' element={<List/> }/>
      <Route path='/order' element={<Order />} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
    }
    </>
  )
}

export default App
