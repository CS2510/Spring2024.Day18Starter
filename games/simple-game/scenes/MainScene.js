import "../components/DeathComponent.js"
import "../components/KeyboardComponent.js"
import "../components/FireComponent.js"
import "../components/LaserComponent.js"
import "../components/ScoreUpdaterComponent.js"

/** The main scene in our game */
class MainScene extends Scene {
  constructor() {
      super("lightgray")

      let circleGameObject = new GameObject("CircleGameObject")
      circleGameObject.addComponent(new Circle())
      circleGameObject.addComponent(new KeyboardComponent())
      circleGameObject.addComponent(new FireComponent())
      circleGameObject.transform.scaleX = 50
      this.gameObjects.push(circleGameObject)
      
      let deathGameObject = new GameObject("DeathGameObject")
      deathGameObject.addComponent(new DeathComponent())
      deathGameObject.addComponent(new Circle("red", "black"))
      deathGameObject.transform.x = 200;
      deathGameObject.transform.y = 0;
      deathGameObject.transform.scaleX = 50
      this.gameObjects.push(deathGameObject)

      let deathGameObject2 = new GameObject("DeathGameObject")
      deathGameObject2.addComponent(new DeathComponent())
      deathGameObject2.addComponent(new Circle("red", "black"))
      deathGameObject2.transform.x = 300
      deathGameObject2.transform.y = 200
      deathGameObject2.transform.scaleX = 50
      this.gameObjects.push(deathGameObject2)
      

      
      let scoreGameObject = new GameObject()
      scoreGameObject.transform.x = 30;
      scoreGameObject.transform.y = 30;
      scoreGameObject.addComponent(new Text("Score: ", "30px sans", "white"))
      scoreGameObject.addComponent(new ScoreUpdaterComponent())
      this.gameObjects.push(scoreGameObject)
  }
}

window.MainScene = MainScene
export default MainScene