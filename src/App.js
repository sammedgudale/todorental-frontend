import "./App.css";
import React from "react";
import Header from "./componant/header";
import Footer from "./componant/footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./componant/home";
import Page404 from "./componant/page404";
import Login from "./componant/login";
import Pro from "./componant/pro";
import AdminProfile from "./Dashboards/AdminProfile";
import Registration from "./componant/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OwnerProfile from "./Dashboards/OwnerProfile";
import SeekerProfile from "./Dashboards/SeekerProfile";
import AboutUs from "./componant/AboutUs";
import AddProperty from "./Pages/AddProperty";
import ViewProperty from "./Pages/ViewProperty";
import AddFacility from "./Pages/AddFacility";
//import Navigation from "./componant/Navigation";


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
      
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/viewproperty" element={<ViewProperty/>} />
        <Route path="/owenerprofile" element={<OwnerProfile />} />
        <Route path="/p" element={<Pro />} />
        <Route path="/addprop" element={<AddProperty />} />
        <Route path="/addfacility" element={<AddFacility />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/adminprofile" element={<AdminProfile />} />
        <Route path="/seekerprofile" element={<SeekerProfile />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
