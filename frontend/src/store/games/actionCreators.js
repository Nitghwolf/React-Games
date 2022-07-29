

const initialState = {
    games: [
        {id:1, title: "Крестики - нолики", url: "xo", icon: "https://lh3.googleusercontent.com/oDEyXUtWujLKD1Inws8Ne4Bw3chcEqAACN-WP_99bz5r0gC28iFLHndsY2MYVBUp0kK5", image: "https://all-t-shirts.ru/goods_images/ru111798II00084dc59028408e026c32e2c24dd7f964d.jpg"}, 
        {id:2, title: "Сапёр", url: "saper", icon: "https://w7.pngwing.com/pngs/205/357/png-transparent-minesweeper-cartoon-comics-land-mine-minesweeper-comics-3d-computer-graphics-orange-thumbnail.png", image: "https://image.winudf.com/v2/image/Y29tLnNhdmFuYXNvZnQubWluZXN3ZWVwZXJfc2NyZWVuXzZfMTUyMjUzNjUyMF8wMDU/screen-6.jpg?fakeurl=1&type=.jpg"}, 
        {id:3, title: "Змейка", url: "sneik", icon: "https://w7.pngwing.com/pngs/392/680/png-transparent-snake-pass-slither-io-mobile-game-snake-game-game-animals-video-game.png", image: "https://image.winudf.com/v2/image1/Y29tLnNvZnR3YXJlbGFuZC5TbmFrZUFkdmVudHVyZV9zY3JlZW5fMl8xNTUxNTg3ODgwXzAxOA/screen-2.jpg?fakeurl=1&type=.jpg"}
    ]
}

export default function gamesReducer (state = initialState, action){
    switch(action.type){

        default: return state;
    }
}