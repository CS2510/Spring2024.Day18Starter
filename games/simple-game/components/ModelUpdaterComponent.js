
class ModelUpdaterComponent extends Component{
    constructor(model){
        super();
        this.model = model;
    }
    handleEvent(event){
        if (event.name == "laserCollision") {
            let gameObject = event.dest
            gameObject.health--;

            if (gameObject.health <= 0) {
                EventSystem.fireEvent({
                    origin:this.parent,
                    dest: null,
                    name: "scoreUpdate"
                })
                GameObject.destroy(gameObject);
            }
        }

    }
    update(ctx){
        let gameObjects = Engine.currentScene.gameObjects

    }
}

window.ModelUpdaterComponent = ModelUpdaterComponent;
export default ModelUpdaterComponent;