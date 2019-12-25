import BoardController from './BoardController';

class Game {
    constructor(options) {
        this.options = options || {};
        this.boardController = null;
        this.init();
    }
   
    init() {
        this.boardController = new BoardController({
            containerEl: this.options.containerEl,
            assetsUrl: this.options.assetsUrl
        })

        this.boardController.drawBoard();
    }
}

export default Game;