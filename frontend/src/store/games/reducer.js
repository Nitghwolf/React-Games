import { GET_ALL_GAMES } from "./actionTypes";

const initialState = {
    games: []
}

export default function gamesReducer (state = initialState, action){
    switch(action.type){
        case GET_ALL_GAMES: {
            return { ...state,  games: action.payload}
        }
        default: return state;
    }
}