import "./static/css/rootStyle.css"
import { Link } from "react-router-dom"

export function Banner({image,title}) {
    return (
        <div className = "bannerclass">
            <img src = {image}></img>
            <p> {title} </p>
            <Link className="details" to ="/inforoom">
                More details
            </Link>
        </div>
    )
}