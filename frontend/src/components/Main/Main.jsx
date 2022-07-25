import React from 'react';
import { NavLink } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <NavLink to="/games/xo">Крестики нолики</NavLink>
        </div>
    );
}

export default Main;
