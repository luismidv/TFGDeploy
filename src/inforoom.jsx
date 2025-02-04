import React from "react";
import "./static/css/index1.css";
import "./static/css/roomStyle.css";
import "./static/css/slider.css";
import { Link } from "react-router-dom"
import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import roombanner3 from "./static/media/roombanner3.webp";
import roombanner4 from "./static/media/roombanner4.jpg";
import roombanner5 from "./static/media/roombanner5.jpg";
import { RoomBanner } from "./Room"
import bedsvg from "./static/media/RoomBanners/bedroom.svg"
import profsvg from "./static/media/RoomBanners/userprof.svg"
import directionsvg from "./static/media/RoomBanners/location.svg"
import eurosvg from "./static/media/RoomBanners/euro.svg"
import bathroomsvg from "./static/media/RoomBanners/bathroom.svg"


const RoomInfo = () => {
  return (
    <div>
      <div className = "top-container">
      <img className="mainlogo" src={companyImage} alt="Company Logo" />
      <p className="pslogan">Improving your house sharing experience</p>

      
      <form className="search-bar-form">
            <div className="menu-div">
                <Link className="rooti-button" to ="/">
                    <p className="link-text">Home</p>
                    <img src={houseImage} alt="Home" />
                </Link>

                {/*<button  className = "rooti-button" onClick = {() => navigate("/rooms")}> Rooms </button>*/}
                <Link className="rooti-button" to ="/rooms">
                    <p className="link-text">Rooms</p>
                    <img src={bedsImage} alt="Rooms" />
                </Link>
  
                <Link className="rooti-button" to ="/profile">
                    <p className="link-text">Profile</p>
                    <img src={profileImage} alt="Profile" />
                </Link>
  
                <Link className="rooti-button" to ="/contact">
                    <p className="link-text">Contact</p>
                    <img src={contactImage} alt="Contact" />
                </Link>
            </div>
  
            <input className="room-search" type="search" name="q" placeholder="Where do you need a room" />
            <img className="search-img" src={searchImage} alt="Search" />
            <button className="submit-search" type="submit"></button>
            <Link className="log-in-button" to ="/login">
                    <p className="link-text">Access</p>
            </Link>
            
          </form>
    </div>
    <section className="recomendations">
        <p className="text-descriptive">Need a room?</p>
        <p className="text-descriptive-2">Discover our crazy offers & Share with your dream partners</p>
        <div className="text-div"></div>
    </section>
      
    <div className = "root-room">   
        <RoomBanner label = "Room at the center of Valencia" img = {roombanner3}
            rooms = "4 " metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
            bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
            profilesvg= {profsvg} username = "PepitoVendepisos"
            directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
            description = "Beatiful house in the center"> 
        </RoomBanner>
      
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img className="slide-img" src={roombanner3} alt="Room 1" />
          <div className="text">Caption Text</div>
        </div>
        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img className="slide-img" src={roombanner4} alt="Room 2" />
          <div className="text">Caption Two</div>

        </div>
        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img className="slide-img" src={roombanner5} alt="Room 3" />
          <div className="text">Caption Three</div>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div> 
      
      <section className="about-us">
        <h1 className="about-us-h1">About us</h1>
        <div className="about-us-div">
          <div className="div-text-about">
            <p className="p-div-section">Our purpose</p>
            <p className="purpose-description">Mainly our purpose is to help people have<br /> the best experience when sharing a home</p>
          </div>
          <div className="div-text-about">
            <p className="p-div-section">Who are we?</p>
            <p className="who-description">Company created in 2024 as a final degree project<br /> with the idea of improving students' sharing experience</p>
          </div>
          <div className="div-text-about">
            <p className="p-div-section">Our team</p>
            <p className="team-description">Our team consists of 1 person.<br /> A computer science student focused on Machine Learning</p>
          </div>
          <div className="div-text-about">
            <p className="p-div-section">Work with us</p>
            <p className="work-description">Feel free to message us via our email or LinkedIn<br /> if you are considering working with us</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomInfo;
