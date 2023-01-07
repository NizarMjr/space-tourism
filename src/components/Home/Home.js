import React from "react";
import Navbar from "../NavBar/Navbar";
import './home.css'

const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <div className="content">
                <div className="info">
                    <p className="intro">So, you want to travel to</p>
                    <span className="space">SPACE</span>
                    <p className="parag">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="explore"><a href="/destination">EXPLORE</a></div>
            </div>
        </main>
    )
}
export default Home;