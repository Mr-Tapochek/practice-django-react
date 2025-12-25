import React from "react";
import { Link } from "react-router-dom";
import './header.scss';

const Header = () => {
    return (
        <header>
            <section className="logo">
                <Link to='main/' className="header-link">УютныйОчаг</Link>
            </section>
            <section className="links">
                <Link to='catalog/' className="header-link">Каталог</Link>
                <Link to='about/' className="header-link">О нас</Link>
                <Link to='profile/' className="header-link">Профиль</Link>
            </section>
        </header>
    );
}
export default Header;