import "../tictactoe-model-events.js"
/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("gray")
      this.model = new TicTacToeModelEvents()
  }
  start(ctx){
    //Draw the board
    


      
  }
}

window.MainScene = MainScene
export default MainScene