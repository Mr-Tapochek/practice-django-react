import React from "react";
import { Link } from "react-router-dom";
import "./main.scss"

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-background">
                <div className="main-overlay">
                    <div className="main-content">
                        <h1 className="main-title">Мебель и разнообразные товары для дома</h1>
                        <p className="main-subtitle">Создайте уют в вашем доме с нашей качественной мебелью</p>
                        <Link to="/catalog" className="main-button">Перейти в каталог</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;