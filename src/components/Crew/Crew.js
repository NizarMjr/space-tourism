import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import './crew.css'

const Crew = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(0)
    useEffect(() => {
        axios.get('./data.json').then(res => setData(res.data.crew[selected])).catch(err => console.log(err.message));
    }, [selected])
    const getDetail = (id) => {
        setSelected(id)
        const crew = document.getElementsByClassName('pic');
        for (let i = 0; i < crew.length; i++) {
            if (crew[i].classList.contains('crew-active'))
                crew[i].classList.remove('crew-active');
        }
        document.getElementById(`crew${id}`).classList.add('crew-active')
    }
    return (
        <main className="crew">
            <Navbar />
            <p className="title">02 MEET YOUR CREW</p>
            <div className="crew-content">
                <div className="crew-info">
                    <span className="role">{data.role}</span>
                    <span className="name">{data.name}</span>
                    <p className="bio">{data.bio}</p>
                </div>
                <div className="crew-picture">
                    {data.images && <img src={`../../../${data.images.png}`} alt="crew picture" />}
                </div>
            </div>
            <div className="crew-list">
                <span className="pic crew-active" id='crew0' onClick={() => getDetail(0)}></span>
                <span className="pic" id='crew1' onClick={() => getDetail(1)}></span>
                <span className="pic" id='crew2' onClick={() => getDetail(2)}></span>
                <span className="pic" id='crew3' onClick={() => getDetail(3)}></span>

            </div>
        </main>
    )
}
export default Crew;