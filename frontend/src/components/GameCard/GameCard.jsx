import React from 'react';
import { NavLink } from "react-router-dom";
import "./GameCard.css";

const GameCard = ({Game}) => {
    return (
        <li>   
            <NavLink to={`/games/${Game.url}`}className="card">
                <img src={`${Game.image}`} className="card__image" alt="Изображение игры" />
                <div className="card__overlay">
                    <div className="card__header">
                    <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                        <path />
                    </svg>
                    <img className="card__thumb" src={`${Game.icon}`} alt="Иконка игры" />
                    <div className="card__header-text">
                        <h3 className="card__title">{Game.title}</h3>
                        {/* <span className="card__status">1 hour ago</span> */}
                    </div>
                    </div>
                    <p className="card__description">Логическая игра между двумя противниками на квадратном поле 3 на 3 клетки или большего размера. Один из игроков играет «крестиками», второй - «ноликами».</p>
                </div>
            </NavLink>
        </li>
    );
}

export default GameCard;
