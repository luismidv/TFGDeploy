import React from 'react';
import './static/css/index1.css'; // Assuming the CSS files are stored in the 'static/css' folder
import companyImage from './static/media/company.jpg';
import houseImage from './static/media/house1.svg';
import bedsImage from './static/media/beds-pillow.svg';
import profileImage from './static/media/profile.svg';
import contactImage from './static/media/agenda-phone-number-svgrepo-com.svg';
import searchImage from './static/media/search-svgrepo-com.svg';
import roomIdxImage from './static/media/room_idx.webp';
import roombannerImage from './static/media/roombanner8.jpg';
import { Banner } from './Banner';
import roombannerImage1 from './static/media/roombanner1.webp';
import roombannerImage2 from './static/media/roombanner2.jpg';
import roombannerImage3 from './static/media/roombanner3.webp';
import roombannerImage4 from './static/media/roombanner4.jpg';
import roombannerImage5 from './static/media/roombanner5.jpg';
import roombannerImage6 from './static/media/roombanner6.webp';

const HomePage = () => {
  return (
    <div>
      <div className="top-container">
        <img className="mainlogo" src={companyImage} alt="Company Logo" />
        <p className="pslogan">Improving your house sharing experience</p>

        <form className="search-bar-form">
          <div className="menu-div">
            <a className="rooti-button" href="./index.html" target="_blank" rel="noopener noreferrer">
              <p className="link-text">Home</p>
              <img src={houseImage} alt="Home" />
            </a>

            <a className="rooti-button" href="./src/templates/room/template.html" target="_blank" rel="noopener noreferrer">
              <p className="link-text">Rooms</p>
              <img src={bedsImage} alt="Rooms" />
            </a>

            <a className="rooti-button" href="./src/templates/room/profile.html" target="_blank" rel="noopener noreferrer">
              <p className="link-text">Profile</p>
              <img src={profileImage} alt="Profile" />
            </a>

            <a className="rooti-button" href="./src/templates/room/contact.html" target="_blank" rel="noopener noreferrer">
              <p className="link-text">Contact</p>
              <img src={contactImage} alt="Contact" />
            </a>
          </div>

          <input className="room-search" type="search" name="q" placeholder="Where do you need a room" />
          <img className="search-img" src={searchImage} alt="Search" />
          <button className="submit-search" type="submit"></button>
          <a className="log-in-button" href="./src/templates/room/login.html">
            <p>Access</p>
          </a>
        </form>
      </div>

      <section className="recomendations">
        <p className="text-descriptive">Need a room?</p>
        <p className="text-descriptive-2">Discover our crazy offers & Share with your dream partners</p>
        <div className="text-div"></div>
      </section>

      <div id="image-expo" className="image-expositor">
        <AppExpo ></AppExpo>
      </div>

      <p className="general-description">
        Do not waste your time, we do it for you.
      </p>
      <p className="general-description-p">
        Searching for house partners can be difficult, we provide an opportunity <br />
        to get the best possible partners.Our powered by AI system gives us the power<br /> for selecting your perfect match. <br />
        Fill out the following data sowe can find your match considering your preferences.
      </p>

      <p className="general-description" style={{ top: '1730px', left: '237px' }}>Let the hard work be for us</p>
      <a className="form-button" href="./src/templates/room/started.html" target="_blank" rel="noopener noreferrer">
        Get started
      </a>
      <img className="room-idx" src={roomIdxImage} alt="Room Index" />

      <section className="why-us">
        <h1 className="why-us-h1">Why choosing Roomatch</h1>
        <p className="why-us-p">
          Find your dream room <br /> <br />
          Match incredible partners <br /> <br />
          Contact with them <br /> <br />
          Live the best sharing experience <br /> <br />
          Sharing a home can be a difficult experience <br />our idea is to turn that experience into<br />
          <strong>The greatest one possible.</strong>
        </p>
        <img className="img-banner" src={roombannerImage} alt="Why Roomatch" />
      </section>

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
    </div>
  );
};

export default HomePage;

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


