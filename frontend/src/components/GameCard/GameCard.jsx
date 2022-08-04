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
                    </div>
                    </div>
                    <p className="card__description">{Game.description}</p>
                </div>
            </NavLink>
        </li>
    );
}

export default GameCard;
