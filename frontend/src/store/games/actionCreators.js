

const initialState = {
    games: [{id:1, title: "Крестики - нолики", url: "xo"}, {id:2, title: "Сапёр", url: "saper"}, {id:3, title: "Змейка", url: "sneik"}]
}

export default function gamesReducer (state = initialState, action){
    switch(action.type){

        default: return state;
    }
}