
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
function Home(){
    const navigate = useNavigate();
}

const HomePage = () => {
    return (
      <div>
        <div className="top-container">
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
            <Link className="log-in-button" to ="/register">
                    <p className="link-text">Access</p>
            </Link>
            
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