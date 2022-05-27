import './App.css';
import {Route, Routes,useLocation   } from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Product from './productParts/productInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  let { url } = useLocation ();
  console.log(url);
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/'               element={<Login/>}></Route>
        <Route path='/Home'               element={<Home/>}></Route>
        <Route path='/product/:id'    element={<Product />}></Route>
        <Route path='/Categories/*'   element={<Categories/>}></Route>
        <Route path='/Profile'          element={<Profile/>}></Route>
        <Route path='/contact'        element={<Contact/>}></Route>
      </Routes> 
       <Footer/>
    </div>
  );
}

export default App;
