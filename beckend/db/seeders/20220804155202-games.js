'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Games', [{
        title: 'Крестики - нолики',
        description: 'Логическая игра между двумя противниками на квадратном поле 3 на 3 клетки или большего размера. Один из игроков играет «крестиками», второй - «ноликами».',
        url: 'xo',
        image: 'https://all-t-shirts.ru/goods_images/ru111798II00084dc59028408e026c32e2c24dd7f964d.jpg',
        icon: 'https://lh3.googleusercontent.com/oDEyXUtWujLKD1Inws8Ne4Bw3chcEqAACN-WP_99bz5r0gC28iFLHndsY2MYVBUp0kK5',
        createdAt: new Date(),
        updatedAt: new Date(),
     },
    {
      title: 'Сапёр',
      description: 'Это логическая игра-головоломка, действие которой разворачивается на сетчатом минном поле. Цель игры максимально проста: нужно открыть все клетки на поле, при этом не подорвавшись на мине, и сделать это нужно как можно быстрее. Когда вы открываете клетку, в ней пишется количество мин вокруг нее.',
      url: 'saper',
      image: 'https://image.winudf.com/v2/image/Y29tLnNhdmFuYXNvZnQubWluZXN3ZWVwZXJfc2NyZWVuXzZfMTUyMjUzNjUyMF8wMDU/screen-6.jpg?fakeurl=1&type=.jpg',
      icon: 'https://w7.pngwing.com/pngs/205/357/png-transparent-minesweeper-cartoon-comics-land-mine-minesweeper-comics-3d-computer-graphics-orange-thumbnail.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Змейка',
      description: 'Игрок управляет длинным, тонким существом, напоминающим змею, которое ползает по плоскости, собирая еду, избегая столкновения с собственным хвостом и краями игрового поля.',
      url: 'sneik',
      image: 'https://image.winudf.com/v2/image1/Y29tLnNvZnR3YXJlbGFuZC5TbmFrZUFkdmVudHVyZV9zY3JlZW5fMl8xNTUxNTg3ODgwXzAxOA/screen-2.jpg?fakeurl=1&type=.jpg',
      icon: 'https://w7.pngwing.com/pngs/392/680/png-transparent-snake-pass-slither-io-mobile-game-snake-game-game-animals-video-game.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  }
};
