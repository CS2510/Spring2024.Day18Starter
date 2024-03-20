
class ModelUpdaterComponent extends Component{
    constructor(model){
        super();
        this.model = model;
    }
    update(ctx){
        let gameObjects = Engine.currentScene.gameObjects

        //Add new mobs
        for(let mob of this.model.mobs){
            if(mob.death)
                continue;
            let found = false;
            for(let gameObject in gameObjects){
                if(gameObject.GUID == mob.GUID){
                    found = true;
                }
            }
            if(!found){
                let newGameObject = new DeathGameObject()
                if(mob.type == "Advanced")
                    newGameObject = new FlodnagGameObject()
                GameObject.instantiate(newGameObject, mob.x, mob.y, 50)
                newGameObject.start(ctx)
                newGameObject.GUID = mob.GUID;
            }
        }

        //Remove dead mobs
        for(let mob of this.model.mobs){
            if(mob.death)
                continue;
            let found = false;
            for(let gameObject in gameObjects){
                if(gameObject.GUID == mob.GUID){
                    found = true;
                    if(gameObject.markForDelete){
                        mob.death = true;
                    }
                }
            }
        }

    }
}

window.ModelUpdaterComponent = ModelUpdaterComponent;
export default ModelUpdaterComponent;