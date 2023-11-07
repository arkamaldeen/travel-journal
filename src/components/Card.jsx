import LocationOnIcon from '@mui/icons-material/LocationOn';


function Card(props) {

    console.log(props)    
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-img">
                    <img src={`./images/${props.image}`} alt="card" />
                </div>
                <div className="card-info">
                    <div className="card-location">
                        <div>
                            <LocationOnIcon />
                            <p>{props.location}</p>
                        </div>
                        <a href="www.google.com" target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.name}</h1>
                    <h2>{props.date}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            {!props.isLast && <div className="border"></div>}
        </div>
    )
}

export default Card;