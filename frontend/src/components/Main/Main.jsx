// @ts-nocheck
import GameCard from 'components/GameCard/GameCard';
// @ts-ignore
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { requestGames } from '../../store/games/actionCreators';
import "./Main.css";

const Main = () => {
    // @ts-ignore
    const games = useSelector(state => state.games.games);

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(requestGames());
    }, [dispatch]);

    return (
        <div className='main-games'>
            <ul className="cards">
                {games.map(elem => <GameCard key={elem.id} Game={elem}/>)}
            </ul>
        </div>
    );
}

export default Main;
