
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
              <input className="room-search w-full " type="search" name="q" placeholder="Where do you need a room" />
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
  
        <div id="image-expo" className="image-expositor">
          <AppExpo />
        </div>
  
        <p className="general-description text-center md:text-left">
          Do not waste your time, we do it for you.
        </p>
        <p className="general-description-p text-center md:text-left">
          Searching for house partners can be difficult, we provide an opportunity <br />
          to get the best possible partners.Our powered by AI system gives us the power<br /> for selecting your perfect match. <br />
          Fill out the following data so we can find your match considering your preferences.
        </p>
  
        <p className="general-description text-center md:text-left" style={{ top: '1730px', left: '237px' }}>Let the hard work be for us</p>
        <a className="form-button block w-full md:w-auto" href="./src/templates/room/started.html" target="_blank" rel="noopener noreferrer">
          Get started
        </a>
        <img className="room-idx w-full md:w-auto" src={roomIdxImage} alt="Room Index" />
  
        <section className="why-us text-center md:text-left">
          <h1 className="why-us-h1">Why choosing Roomatch</h1>
          <p className="why-us-p">
            Find your dream room <br /> <br />
            Match incredible partners <br /> <br />
            Contact with them <br /> <br />
            Live the best sharing experience <br /> <br />
            Sharing a home can be a difficult experience <br />our idea is to turn that experience into<br />
            <strong>The greatest one possible.</strong>
          </p>
          <img className="img-banner w-full md:w-auto" src={roombannerImage} alt="Why Roomatch" />
        </section>
  
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
      </div>
    );
};
  
export default HomePage;
