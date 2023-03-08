import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './componant/header';
import Footer from './componant/footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './componant/home';
import Page404 from './componant/page404';
import Register from './componant/register';
import Login from './componant/login';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom';
function App() {
  return (
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
