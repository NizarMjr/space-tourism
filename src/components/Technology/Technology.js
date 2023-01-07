import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import './technology.css'

const Technology = () => {
    const [ID, setID] = useState(0);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('./data.json').then(res => setData(res.data.technology[ID])).catch(err => console.log(err.message));
    }, [ID]);
    const toggleTech = (id) => {
        setID(id);
        const btns = document.getElementsByClassName('btn');
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].classList.contains('btn-active'))
                btns[i].classList.remove('btn-active');
        }
        document.getElementById(`tech${id}`).classList.add('btn-active');
    }
    return (
        <main className="technology">
            <Navbar />
            <div className="tech-content">
                <div className="btns">
                    <span className="btn btn-active" id="tech0" onClick={() => toggleTech(0)}>1</span>
                    <span className="btn" id="tech1" onClick={() => toggleTech(1)}>2</span>
                    <span className="btn" id="tech2" onClick={() => toggleTech(2)}>3</span>
                </div>
                <div className="tech-info">
                    <p className="intro">THE TERMINOLOGY...</p>
                    <span className="name">{data.name}</span>
                    <p className="descrip">{data.description}</p>
                </div>
                <div className="tech-picture">
                    {data.images && <img src={`../../../${data.images.portrait}`} alt="technology picture" />}
                </div>
            </div>
        </main>
    )
}
export default Technology;