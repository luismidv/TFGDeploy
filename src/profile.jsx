import React from "react";
import companyLogo from "./static/media/company.jpg";
import houseIcon from "./static/media/house1.svg";
import bedsIcon from "./static/media/beds-pillow.svg";
import profileIcon from "./static/media/profile.svg";
import contactIcon from "./static/media/agenda-phone-number-svgrepo-com.svg";
import searchIcon from "./static/media/search-svgrepo-com.svg";
import { Link } from 'react-router-dom';
import { AppExpo } from './App';
import { useNavigate } from 'react-router-dom';
import "./static/css/index1.css"
import "./static/css/profile.css"

function Home(){
    const navigate = useNavigate();
}

const ProfileComponent = () => {
  return (
    <div className="top-container">
      <img className="mainlogo" src={companyLogo} alt="Company Logo" />
      <p className="pslogan">Improving your house sharing experience</p>

      <form className="search-bar-form">
        <div className="menu-div">
        <Link className="rooti-button" to ="/">
                    <p className="link-text">Home</p>
                    <img src={houseIcon} alt="Home" />
                </Link>

                {/*<button  className = "rooti-button" onClick = {() => navigate("/rooms")}> Rooms </button>*/}
                <Link className="rooti-button" to ="/rooms">
                    <p className="link-text">Rooms</p>
                    <img src={bedsIcon} alt="Rooms" />
                </Link>
  
                <Link className="rooti-button" to ="/profile">
                    <p className="link-text">Profile</p>
                    <img src={profileIcon} alt="Profile" />
                </Link>
  
                <Link className="rooti-button" to ="/contact">
                    <p className="link-text">Contact</p>
                    <img src={contactIcon} alt="Contact" />
                </Link>
        </div>

        <input className="room-search" type="search" name="q" placeholder="Where do you need a room?" />
        <img className="search-img" src={searchIcon} alt="Search" />
        <button className="submit-search" type="submit"></button>
        <Link className="log-in-button" to ="/login">
          <p className="link-text">Access</p>
        </Link>
      </form>

      <section className="recomendations">
        <p className="text-descriptive">Need a room?</p>
        <p className="text-descriptive-2">Discover our crazy offers & Share with your dream partners</p>
        <div className="text-div"></div>
      </section>

      <section className="profile-section">
        <form className="form-class" method="post" action="/">
          <fieldset className="form-fieldset">
            <h1 className="profile-title">Your zone</h1>
            <label className="label-info" htmlFor="name">Name:</label>
            <input className="input-info" type="text" id="name" name="name" placeholder="Your name" required />
            <label className="label-info" htmlFor="surnames">Surname:</label>
            <input className="input-info-surname" type="text" id="surnames" name="surnames" placeholder="Your surnames" required />
            <label className="label-info" htmlFor="age">Age:</label>
            <input className="input-info-age" type="number" id="age" name="age" placeholder="Your age" required />
            <label className="label-info" htmlFor="email">Email:</label>
            <input className="input-info-email" type="email" id="email" name="email" placeholder="Your email" required />
          </fieldset>
          <fieldset className="selectors-fieldset">
            <label className="profile-label" htmlFor="worktime">Do you work during the morning, the night or both?</label>
            <select name="worktime" id="worktime">
              <option value="">Both of them</option>
              <option value="morning">Morning</option>
              <option value="night">Night</option>
            </select><br />
            <label className="profile-label" htmlFor="biorythm">
                When out of work, are you a morning or night person?
            </label>
            <select name="biorythm" id="id-biorythm">
                <option value="morning">Morning</option>
                <option value="night">Night</option>
            </select>
            <br /><br />

      <label className="profile-label" htmlFor="studies">
        Which is your studies level?
      </label>
      <select name="level_studies" id="level_studies">
        <option value="secondary">Secondary</option>
        <option value="universitary">Universitary</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="reading">
        Do you usually read?
      </label>
      <select name="reading" id="id-read">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="pets">
        Are you fine with having pets at home?
      </label>
      <select name="pets" id="id-pets">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="cook">
        Do you usually cook?
      </label>
      <select name="cook" id="id-cook">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="sport">
        Do you often do sport?
      </label>
      <select name="sport" id="id-sport">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="smoker">
        Do you smoke?
      </label>
      <select name="smoker" id="id-smoker">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <label className="profile-label" htmlFor="orderliness">
        Do you consider yourself an organized person?
      </label>
      <select name="orderliness" id="id-order">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <br /><br />

      <button className="profile-button" type="submit">  Save </button> 
        <button className="profile-button" type="submit"> Cancel </button>
          </fieldset>
        </form>
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

export default ProfileComponent;