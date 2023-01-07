import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    const showBurgerLinks = () => {
        document.getElementsByClassName('burger')[0].classList.remove('toggle');
    }
    const hideBurgerLinks = () => {
        document.getElementsByClassName('burger')[0].classList.add('toggle');
        document.getElementsByClassName('burger')[0].classList.add('toggle');
    }
    const activeLink = (id) => {
        const links = document.getElementsByClassName('link');
        for (let i = 0; i < links.length; i++) {
            if (links[i].classList.contains('active'))
                links[i].classList.remove('active');
        }
        document.getElementById(id).classList.add('active');
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src='../../../assets/shared/logo.svg' alt="logo" />
            </div>
            <div className="links">
                <ul className="list-links">
                    <li onClick={() => activeLink('1')}><Link to='/' className="link active" id="1"><span>00</span>  HOME</Link></li>
                    <li onClick={() => activeLink('2')}><Link to='/destination' className="link" id="2"><span>01</span> DESTINATION</Link></li>
                    <li onClick={() => activeLink('3')}><Link to='/crew' className="link" id="3"><span>02</span> CREW</Link></li>
                    <li onClick={() => activeLink('4')}><Link to='/technology' className="link" id="4"><span>03</span> TECHNOLOGY</Link></li>
                </ul>
            </div>
            <img src='../../../assets/shared/icon-hamburger.svg' alt="links logo" className="burger-icon" onClick={() => showBurgerLinks()} />
            <div className="burger toggle">
                <ul>
                    <span className="close-icon" onClick={() => hideBurgerLinks()}>x</span>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/destination">DESTINATION</Link></li>
                    <li><Link to="/crew">CREW</Link></li>
                    <li><Link to="/technology">TECHNOLOGY</Link></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar;