import React from 'react';
import './static/css/index1.css'; // Assuming the CSS files are stored in the 'static/css' folder
import { Banner } from './Banner';
import roombannerImage1 from './static/media/roombanner1.webp';
import roombannerImage2 from './static/media/roombanner2.jpg';
import roombannerImage3 from './static/media/roombanner3.webp';
import roombannerImage4 from './static/media/roombanner4.jpg';
import roombannerImage5 from './static/media/roombanner5.jpg';
import roombannerImage6 from './static/media/roombanner6.webp';
import { Link } from 'react-router-dom';
import { Template } from './Roompage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import ProfileComponent from './profile';
import RegisterPage from './register';


export function AppExpo(){
  return (
    <div className = "banners-flex">
      <Banner image = {roombannerImage1} title = "Room number 1" ></Banner>
      <Banner image = {roombannerImage2} title = "Room number 2"></Banner>
      <Banner image = {roombannerImage3} title = "Room number 3"></Banner> 
      <Banner image = {roombannerImage4} title = "Room number 4"></Banner>
      <Banner image = {roombannerImage5} title = "Room number 5"></Banner>
      <Banner image = {roombannerImage6} title = "Room number 6"></Banner>
    </div>
  )
}

export function App() {
  return (
    
    <Routes>
      
      <Route path ="/"  element = {<HomePage />} />
      <Route path="/rooms" element={<Template />} />
      <Route path ="/profile"  element = {<ProfileComponent />} />
      <Route path="/contact" element={<Template />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
    
  );
}
export default App;


