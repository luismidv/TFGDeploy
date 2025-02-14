
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
import { Headers } from './App';
import { Footeras } from './App';

function Home(){
    const navigate = useNavigate();
}



const HomePage = () => {
    return (
      <div>
        <Headers></Headers>
  
        <div id="image-expo" className="image-expositor">
          <AppExpo />
        </div>
        <div className = "text-center md:text-left relative top-[300px] left-[50px] md:top-0 md:left-0 transition-all duration-300">
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
        </div>
  
        <section className="why-us text-center md:text-lef relative md:translate-y-0 translate-y-[500px] transition-transform duration-300">
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
  
        <Footeras></Footeras>
      </div>
    );
};
  
export default HomePage;
