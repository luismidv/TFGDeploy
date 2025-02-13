import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import roomIdxImage from './static/media/room_idx.webp';
import roombannerImage from './static/media/roombanner8.jpg';
import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';

import React from "react";
import "./static/css/index1.css";
import "./static/css/roomStyle.css";
import { RoomBannerCall } from './Room';

    
function Home(){
    const navigate = useNavigate();
}

export function Template() {
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
      
                <div className="relative mt-4">
                  <input className="room-search w-full md:w-auto" type="search" name="q" placeholder="Where do you need a room" />
                  <img className="search-img absolute top-0 right-0 w-6 h-6" src={searchImage} alt="Search" />
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

      {/* Contenedor de habitaciones */}
      <div id="room-container1">
        <RoomBannerCall />
      </div>

      {/* Sección "Sobre nosotros" */}
      <section className="about-us">
        <h1 className="about-us-h1">About us</h1>
        <div className="about-us-div">
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
              Our team is conformed by 1 person. A computer science student with a focus on Machine Learning.
            </p>
          </div>
          <div className="div-text-about">
            <p className="p-div-section">Work with us</p>
            <p className="work-description">
              Feel free to message us via our email or LinkedIn if you are considering working with us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Template;

