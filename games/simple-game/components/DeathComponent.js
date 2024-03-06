class DeathComponent extends Component {
    constructor(){
        super()
    }
    start(){
    }

    update() {

        let circleGameObject = null;
        for (let gameObject of Engine.currentScene.gameObjects) {
            if (gameObject.name == "CircleGameObject") {
                circleGameObject = gameObject
            }
        }

        if(!circleGameObject) return;

        let collision = Collisions.isCircleCircleCollision(
            { x: this.transform.x, y: this.transform.y },
            { x: circleGameObject.transform.x, y: circleGameObject.transform.y },
            50,
            50)


        if (collision) {
            Engine.currentScene = new DeathScene()
        }
    }
}

window.DeathComponent = DeathComponent;
export default DeathComponent