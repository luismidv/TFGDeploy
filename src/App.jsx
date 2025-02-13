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
import LoginPage from './login'
import RoomInfo from './inforoom';
import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';


export function AppExpo(){
  return (
    <div className = "banners-flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/inforoom" element={<RoomInfo />} />
      
    </Routes>
    
  );
}
export default App;

export function Headers(){
  return (
        <div>
          <div className="top-container p-6 rounded-lg shadow-lg">
            <img className="mainlogo w-full md:w-auto" src={companyImage} alt="Company Logo" />
            <p className="pslogan text-center md:text-left">Improving your house sharing experience</p>
    
            <form className="search-bar-form">
              <div className="menu-div flex flex-wrap justify-center">
                  <Link className="rooti-button  transition w-full sm:w-1/2 md:w-auto" to="/">
                     <img src={houseImage} alt="Home" />
                  </Link>
  
                  <Link className="rooti-button  transition w-full sm:w-1/2 md:w-auto" to="/rooms">
                      <img src={bedsImage} alt="Rooms" />
                  </Link>
    
                  <Link className="rooti-button  transition w-full sm:w-1/2 md:w-auto" to="/profile">
                      
                      <img src={profileImage} alt="Profile" />
                  </Link>
    
                  <Link className="rooti-button  transition w-full sm:w-1/2 md:w-auto" to="/contact">
                      
                      <img src={contactImage} alt="Contact" />
                  </Link>
              </div>
    
              <div className="divsearch relative mt-4">
                <input className="room-search  " type="search" name="q" placeholder="Where do you need a room" />
                <img className="search-img" src={searchImage} alt="Search" />
                <button className="submit-search" type="submit"></button>
              </div>
              <Link className="log-in-button w-full sm:w-auto mt-4" to="/login">
                  <p className="link-text text-center">Access</p>
              </Link>
              
            </form>
          </div>
    
          <section className="recomendations text-center md:text-left">
            <p className="text-descriptive">Need a room?</p>
            <p className="text-descriptive-2">Discover our crazy offers & Share with your dream partners</p>
          </section>
    
        
    
        </div>
      );
  };

export function Footeras(){
  return(
  <section className="about-us text-center md:text-left">
          <h1 className="about-us-h1">About us</h1>
          <div className="about-us-div grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="div-text-about">
              <p className="p-div-section">Our purpose</p>
              <p className="purpose-description">
                Mainly our purpose is to help people have the best experience when sharing a home.
              </p>
            </div>
            <div className="div-text-about">
              <p className="p-div-section">Who are we?</p>
              <p className="who-description">
                Company created in 2024 as a final degree project with the idea of improving students' sharing experience.
              </p>
            </div>
  
            <div className="div-text-about">
              <p className="p-div-section">Our team</p>
              <p className="team-description">
                Our team is composed of 1 person: a computer science student focused on machine learning.
              </p>
            </div>
  
            <div className="div-text-about">
              <p className="p-div-section">Work with us</p>
              <p className="work-description">
                Feel free to message us via our email or LinkedIn if you’re considering working with us.
              </p>
            </div>
          </div>
        </section>
  )
}
    
  



