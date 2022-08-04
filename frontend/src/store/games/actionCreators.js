// @ts-nocheck
import axios from "axios";
import { GET_ALL_GAMES } from "./actionTypes";

export function requestGames(){
    return (dispatch) => {
        axios.get("http://localhost:4000/api/games")
        .then(data => {
            dispatch(addGames(data.data))
        })
        .catch(function(error){
            alert(error.response.data.message);
        });
    }
}

export function addGames(games){
    return {type: GET_ALL_GAMES, payload: games}
}