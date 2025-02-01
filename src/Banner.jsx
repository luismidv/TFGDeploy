import "./static/css/rootStyle.css"

export function Banner({image,title}) {
    return (
        <div className = "bannerclass">
            <img src = {image}></img>
            <p> {title} </p>
            {/* <a className = "details" href="./src/templates/room/room.html"> More details</a> */}
            
        </div>
    )
}