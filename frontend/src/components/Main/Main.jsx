import GameCard from 'components/GameCard/GameCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import "./Main.css";

const Main = () => {
    // @ts-ignore
    const games = useSelector(state => state.games.games);

    return (
        <div className='main-games'>
            <ul className="cards">
                {games.map(elem => <GameCard key={elem.id} Game={elem}/>)}
            </ul>
        </div>
    );
}

export default Main;
