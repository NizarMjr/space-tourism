import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import './destination.css'

const Destination = () => {
    const [starID, setStar] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('./data.json').then(res => setData(res.data.destinations[starID])).catch(err => console.log(err.message))
    }, [starID])
    const changeStar = (id) => {
        setStar(id);
        const stars = document.getElementsByClassName('star');
        for (let i = 0; i < stars.length; i++) {
            if (stars[i].classList.contains('active'))
                stars[i].classList.remove('active');
        }
        document.getElementById(`star${id}`).classList.add('active');
    }
    return (
        <main className="destination">
            <Navbar />
            <div className="destination-content">
                <div className="destination-info">
                    <p className="pick-destination"><span>01</span>PICK YOUR DISTINATION</p>
                     {data.images && <img src={`../../../${data.images.png}`} className="image-star" alt="star image" />}
                </div>
                <div className="destination-star">
                    <div className="star-description">
                        <ul className="stars-list">
                            <li className="star active" id="star0" onClick={() => changeStar(0)}>MOON</li>
                            <li className="star" id="star1" onClick={() => changeStar(1)} >MARS</li>
                            <li className="star" id="star2" onClick={() => changeStar(2)}>EUROPA</li>
                            <li className="star" id="star3" onClick={() => changeStar(3)} >TITAN</li>
                        </ul>
                    </div>
                    <article className="about-star">
                        <span className="name">{data.name}</span>
                        <p className="descrp">{data.description}</p>
                        <div className="distance-time">
                            <div className="distance">AVG. DISTANCE<span>{data.distance}</span></div>
                            <div className="travel-time">EST. TRAVEL TIME<span>{data.travel}</span></div>
                        </div>

                    </article>
                </div>
            </div>
        </main>
    )
}
export default Destination;
