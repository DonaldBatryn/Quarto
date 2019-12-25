import Game from './game';

document.addEventListener("DOMContentLoaded", (function () {
    'use strict';

    const game = new Game({
        containerEl: document.getElementById('board-container'),
        assetsUrl: 'dist/3d_assets/'
    })
}))
// (function () {
//     'use strict';

//     const game = new Game({
//         containerEl: document.getElementById('board-container'),
//         assetsUrl: 'dist/3d_assets/'
//     })
// })();