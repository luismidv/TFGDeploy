import "./static/css/roomStyle.css"
import "./static/css/roominfo.css"
import React from "react";
import roomImg from "./static/media/roombanner1.webp"
import roomImg2 from "./static/media/roombanner3.webp"
import roomImg3 from "./static/media/roombanner2.jpg"
import roomImg4 from "./static/media/roombanner4.jpg"
import bedsvg from "./static/media/RoomBanners/bedroom.svg"
import profsvg from "./static/media/RoomBanners/userprof.svg"
import directionsvg from "./static/media/RoomBanners/location.svg"
import eurosvg from "./static/media/RoomBanners/euro.svg"
import bathroomsvg from "./static/media/RoomBanners/bathroom.svg"


export function RoomBannerCall() {
    return(
        <section id = "room-container">
          <RoomBanner label = "Room at the center of Valencia" img = {roomImg}
          rooms = "4 " metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
    
          <RoomBanner label = "Room at the center of Madrid" img = {roomImg2} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg = {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
    
          <RoomBanner label = "Room at the center of Seville" img= {roomImg3} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center "/>
          
          <RoomBanner label = "Room at the center of Malaga" img= {roomImg4} 
          rooms = "4" metters = "120" bathrooms = "2" price = "350 €" bathroomsvg = {bathroomsvg}
          bedroomsvg = {bedsvg}  eurosvg = {eurosvg} 
          profilesvg= {profsvg} username = "PepitoVendepisos"
          directionsvg = {directionsvg} direction ="Joaquin Sorolla street"
          description = "Beatiful house in the center"
          />
        </section>
      )
}



export function RoomBanner({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        <div className = "room-label">
            <img className = "room-banner-img" src = {img}></img>
            <p className = "desc-p"> {label}  </p>
            <div className = "head-info">
                <p className = "metters-p"> {metters} M </p>
            </div>
            <div className = "head-info">
                <p className = "bathrooms-p"> {bathrooms} </p>
                <img className= "bathroom-img" src = {bathroomsvg} ></img>
            </div>
            <div className = "head-info">
                <p className = "bedroom-p">{rooms}</p>
                <img className = "bedroom-img" src = {bedroomsvg} ></img>
            </div>
           <p className = "price-p">  {price}</p>
            
            <img className ="profile-img" src = {profilesvg}></img>
            <p className = "username-p"> {username}</p>
            
            <img className = "direction-img" src = {directionsvg}></img>
            <p className = "direction-p"> {direction}</p>
            
            <a className = "room-info"  href = "../templates/room.html" target = "_blank">Visit</a>
            
            {description.split("\n").map((line,index) => (
                <p className = "description-p" key={index}>{line}</p>
            ))}
        </div>
    )
}


export function RoomInfo({label, img, rooms, metters, bathrooms,price, bedroomsvg, 
    bathroomsvg, eurosvg,profilesvg, username, directionsvg, direction, description}) {
    
    return(
        <div className = "super-container">
            <div className = "room-label">
                <img className = "room-banner-img" src = {img}></img>
                <p className = "desc-p"> {label}  </p>
                <div className = "head-info">
                    <p className = "metters-p"> {metters} M </p>
                </div>
                <div className = "head-info">
                    <p className = "bathrooms-p"> {bathrooms} </p>
                    <img className= "bathroom-img" src = {bathroomsvg} ></img>
                </div>
                <div className = "head-info">
                    <p className = "bedroom-p">{rooms}</p>
                    <img className = "bedroom-img" src = {bedroomsvg} ></img>
                </div>
            <p className = "price-p">  {price}</p>
            
                <img className ="profile-img" src = {profilesvg}></img>
                <p className = "username-p"> {username}</p>
            
                <img className = "direction-img" src = {directionsvg}></img>
                <p className = "direction-p"> {direction}</p>
            
            
                {description.split("\n").map((line,index) => (
                    <p className = "description-p" key={index}>{line}</p>
                ))}
            </div>
            <div className = "tenants-info">
                
            </div>

            
            
            
        </div>
            
    )
    }