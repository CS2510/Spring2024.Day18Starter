import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/FireComponent.js"
import "../components/LaserComponent.js"
import "../components/ScoreUpdaterComponent.js"
import "../components/ModelUpdaterComponent.js"

import "../prefabs/DeathGameObject.js"
import "../prefabs/FlodnagGameObjects.js"

import "../ShooterModel.js"
import ModelUpdaterComponent from "../components/ModelUpdaterComponent.js"

/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("lightgray")
      this.model = new ShooterModelEvents()
  }
  start(ctx){

      let circleGameObject = new GameObject("CircleGameObject")
      circleGameObject.addComponent(new Circle())
      circleGameObject.addComponent(new KeyboardComponent())
      circleGameObject.addComponent(new FireComponent())
      circleGameObject.addComponent(new ModelUpdaterComponent(this.model))
      GameObject.instantiate(circleGameObject, 200, 400, 50)
      
      // GameObject.instantiate(new DeathGameObject(), 200, 0, 50)

      // GameObject.instantiate(new FlodnagGameObject(), 300, 200, 50)
      

      
      let scoreGameObject = new GameObject()
      scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      GameObject.instantiate(scoreGameObject, 30, 30)
  }
}

window.MainScene = MainScene
export default MainScene