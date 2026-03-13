import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx';
import ShopContext from './context/ShopContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import WishlistProvider from './context/WishlistContext.jsx';
import AuthContext from './context/authContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ScrollToTop />
  <AuthContext>
    <UserContext>
      <ShopContext>
        <WishlistProvider>
        <App />
        </WishlistProvider>
      </ShopContext>
    </UserContext>
  </AuthContext>
  </BrowserRouter>
)
